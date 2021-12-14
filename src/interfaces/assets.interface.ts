export interface IAssets {
  assets: IAsset[];
}

export interface IAsset {
  id: number;
  token_id: string;
  num_sales: number;
  background_color: object;
  image_url: string;
  image_preview_url: string;
  image_thumbnail_url: string;
  image_original_url: object;
  animation_url: object;
  animation_original_url: object;
  name: string;
  description: string;
  external_link: object;
  asset_contract: object;
  permalink: string;
  collection: object;
  decimals: object;
  token_metadata: object;
  owner: IOwner;
  sell_orders: object;
  creator: object;
  traits: ITrait[];
  last_sale: object;
  top_bid: object;
  listing_date: object;
  is_presale: boolean;
  transfer_fee_payment_token: object;
  transfer_fee: object;
}

interface IOwner {
  user: object;
  profile_img_url: string;
  address: string;
  config: string;
}

interface ITrait {
  trait_type: string;
  value: string;
  display_type: object;
  max_value: object;
  trait_count: number;
  order: object;
}

export interface IAssetImage {
  image: string;
}
