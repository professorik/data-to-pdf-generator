CREATE OR REPLACE FUNCTION replace_ingredient(i varchar)
    RETURNS varchar AS
$res$
BEGIN
    RETURN CASE
               WHEN i = '1 Stk. Kohlrabi' THEN '1 Stück Kohlrabi'
               ELSE i
        END;
END;
$res$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION replace_instruction(i varchar)
    RETURNS varchar AS
$res$
BEGIN
    RETURN CASE
               WHEN i = '1 - Wash lime, rub a shell and squeeze juice.' THEN '1 - Prepare lemon.'
               ELSE i
        END;
END;
$res$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION replace_leftover(i varchar)
    RETURNS varchar AS
$res$
BEGIN
    RETURN CASE
               WHEN i = '100g Risoni Kichererbsen' THEN '100g Kichererbsen-Risoni'
               WHEN i = 'cucumber' THEN 'tomato'
               ELSE i
        END;
END;
$res$ LANGUAGE plpgsql;
