type User = {
  user_id: number;
  print_id: string;
  email: string;
  locale: string;
  da_first_name: string,
  da_last_name: string,
  is_first_order: true,
  salutation_text: string,
  info_title: string,
  referral_title: string,
  referral_text: string,
  referral_promo_text: string,
  referral_sub_text1: string,
  referral_sub_text2: string,
  referral_code: string,
  smart_leftover_title: string,
  repackaging_title1: string,
  repackaging_title2: string,
  leftovers_tips: string[]
};

export type { User };
