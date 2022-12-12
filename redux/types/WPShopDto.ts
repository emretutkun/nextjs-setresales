

export interface WPShopDto {
  id: number;
  itemCode: string;
  itemDescription: string;
  colorCode: string;
  colorDescription: string;
  lotTypeDesc: string;
  category: string;
  subCategory: string;
  season: string;
  usd: number;
  usdDiscount: number;
  eur: number;
  eurDiscount: number;
  try: number;
  tryDiscount: number;
  ier: number;
  imagePath: string;
  imageUpdateDate: Date;
  qty: number;
}
