WITH lefties AS
         (
             SELECT osle.order_id,
                    osle.sku_id,
                    s.display_text  AS sku_name,
                    CASE
                        WHEN ROUND(CAST(osle.leftover AS NUMERIC), 1) BETWEEN 0.5 AND 0.6 THEN '1/2'
                        WHEN ROUND(CAST(osle.leftover AS NUMERIC), 1) = 0.25 THEN '1/4'
                        WHEN ROUND(CAST(osle.leftover AS NUMERIC), 1) = 0.2 THEN '1/5'
                        WHEN ROUND(CAST(osle.leftover AS NUMERIC), 1) = 0.4 THEN '2/5'
                        WHEN ROUND(CAST(osle.leftover AS NUMERIC), 1) BETWEEN 0.7 AND 0.8 THEN '4/5'
                        WHEN ROUND(CAST(osle.leftover AS NUMERIC), 1) BETWEEN 0.3 AND 0.33 THEN '1/3'
                        WHEN ROUND(CAST(osle.leftover AS NUMERIC), 1) = 0.6 THEN '2/3'
                        WHEN ROUND(CAST(osle.leftover AS NUMERIC), 1) = 0.1 THEN '1/10'
                        WHEN osle.leftover < 1 THEN ROUND(CAST(osle.leftover AS NUMERIC), 1)::TEXT
                        ELSE ROUND(CAST(osle.leftover AS NUMERIC))::TEXT
                        END         AS leftovers,
                    osle.unit_id,
                    u2.display_text AS wy_ret_unit_name,
                    u2.display_x
             FROM orders_shopping_list_entries osle
                      LEFT JOIN units u2 ON u2.id = osle.unit_id
                      INNER JOIN skus s ON s.id = osle.sku_id AND s.is_primary AND s.deleted_at IS NULL
             WHERE osle.leftover > 0
         ),
     leftovers_tips AS
         (
             SELECT id AS sku_id,
                    lasts_for,
                    leftover_tip
             FROM skus s
             WHERE deleted_at IS NULL
               AND is_primary IS TRUE
               AND is_assumed_at_home IS FALSE
               AND leftover_tip IS NOT NULL
             ORDER BY id
         )
SELECT DISTINCT ON (u.id, lwplf.box_id) u.id                            AS user_id,
                                        CONCAT(EXTRACT(YEAR FROM now()), '-W',
                                               EXTRACT(WEEK FROM CURRENT_DATE + INTERVAL '7 day'), '_', lwplf.box_id,
                                               '_', lwplf.delivery_pickup_block, '_',
                                               ou.user_id)              AS print_id,
                                        u.email,
                                        u.locale,
                                        CASE
                                            WHEN u.locale = 'en' AND o2.is_first_order
                                                THEN CONCAT('Welcome ', dd.da_first_name, '!')
                                            WHEN u.locale = 'en' AND o2.is_first_order = FALSE
                                                THEN CONCAT('Welcome back ', dd.da_first_name, '!')
                                            WHEN u.locale = 'de' AND o2.is_first_order
                                                THEN CONCAT('Hi ', dd.da_first_name, '!')
                                            ELSE CONCAT('Wilkommen zurück, ', dd.da_first_name, '!')
                                            END                         AS salutation_text,
                                        CASE
                                            WHEN u.locale = 'en' THEN 'Useful information:'
                                            ELSE 'Nützliche Informationen:'
                                            END                         AS info_title,
                                        CASE
                                            WHEN u.locale = 'en' THEN 'Spread the word:'
                                            ELSE 'Teile Deine Begeisterung:'
                                            END                         AS referral_title,
                                        CASE
                                            WHEN u.locale = 'en'
                                                THEN 'Help us get the word out there. The wyldr, the merrier! Share your unique code below and get 2 free portions for every new wyldr friend you brought - your friends will get 55% off their first box.'
                                            ELSE 'Hilf‘ uns dabei, mehr Menschen auf die wylde Seite des Lebens zu holen! Je wyldr, desto besser: Teile Deinen persönlichen Code und erhalte für jede*n wylde*n Freund*in 2 Portionen kostenlos - Dein*e Freund*in erhält zusätzlich 55% Rabatt auf seine/ihre erste Box.'
                                            END                         AS referral_text,
                                        CASE
                                            WHEN u.locale = 'en' THEN '1 FRIEND = 2 FREE PORTIONS'
                                            ELSE '1 FREUND*IN = 2 PORTIONEN GRATIS'
                                            END                         AS referral_promo_text,
                                        CASE
                                            WHEN u.locale = 'en' THEN 'Send your friends this code:'
                                            ELSE 'Verschicke den Code direkt an Deine Freund*innen'
                                            END                         AS referral_sub_text1,
                                        CASE
                                            WHEN u.locale = 'en' THEN 'Or scan to send on Whatsapp'
                                            ELSE 'oder scanne den Code, um ihn per Whatsapp zu versenden!'
                                            END                         AS referral_sub_text2,
                                        CONCAT('BE-WYLDR-', ou.user_id) AS referral_code,
                                        CASE
                                            WHEN u.locale = 'en'
                                                THEN 'This week, plan the following remaining ingredients:'
                                            ELSE 'Plane diese Woche folgende Zutaten für andere Gerichte ein:'
                                            END                         AS smart_leftover_title,
                                        CASE
                                            WHEN u.locale = 'en' THEN 'Why we avoid re-packaging...'
                                            ELSE 'Warum wir auf Kleinstverpackungen verzichten...'
                                            END                         AS repackaging_title1,
                                        CASE
                                            WHEN u.locale = 'en' THEN '... and instead support clever food management!'
                                            ELSE '...und stattdessen cleveres Lebensmittelmanagement unterstützen!'
                                            END                         AS repackaging_title2,
                                        array_agg(DISTINCT
                                                  CONCAT(
                                                          replace_leftover(CONCAT(hl.leftovers,
                                                                                  CASE
                                                                                      WHEN hl.unit_id in (4, 10) THEN ''
                                                                                      ELSE ' ' END,
                                                                                  hl.wy_ret_unit_name ->> u.locale,
                                                                                  ' ', hl.sku_name ->> u.locale)),
                                                          ' --- ', lt.leftover_tip ->> u.locale)
                                            )                           as leftovers_tips
FROM household_recipe_portions_last_week hrplw
         LEFT JOIN users u ON u.id = hrplw.household_owner_user_id
         LEFT JOIN delivery_details dd ON dd.id = u.delivery_details_id
         LEFT JOIN orders_users ou ON ou.user_id = u.id AND ou.deleted_at IS NULL
         LEFT JOIN (SELECT id, is_first_order
                    FROM orders
                    WHERE status = 'charged'
                      AND deleted_at IS NULL
                      AND is_first_order) o2 ON o2.id = ou.order_id
         LEFT JOIN last_week_packing_list_file lwplf ON u.id = lwplf.user_id
         LEFT JOIN lefties hl ON hl.order_id = hrplw.order_id
         LEFT JOIN last_week_box_ids lwbi ON lwbi.user_id = u.id
         LEFT JOIN leftovers_tips lt ON hl.sku_id = lt.sku_id
GROUP BY lwplf.box_id, u.id, lwplf.delivery_pickup_block, ou.user_id, o2.is_first_order, dd.da_first_name
ORDER BY lwplf.box_id;
DROP FUNCTION IF EXISTS replace_leftover(i varchar);
