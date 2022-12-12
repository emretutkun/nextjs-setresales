export interface WPShopOrderCreate {
  id: number;
  itemCode: string;
  itemDescription: string;
  lotTypeDesc: string;
  colorCode: string;
  priceType: string;
  qty: number;
  price: number;
  salesPerson: string;
}

export interface WPShopOrder {
  id: number;
  data: string;
}

export interface WPShopOrderCreateResponse {
  id: number;
  data: string;
  isActive: boolean;
  createdDate: string;
  createdBy?: any;
  updatedDate: string;
  updatedBy?: any;
  isDeleted: boolean;
  deletedDate: string;
  deletedBy: number;
}