export interface WPShopCatalogList {
  id: number;
  nameEn: string;
  nameTr: string;
  nameRu: string;
  imagePath: string;
  slugName: string;
  slugValue: string;
  rowIndex: number;
  isActive: boolean;
  createdDate: string;
  createdBy: number;
  updatedDate: string;
  updatedBy: number;
  isDeleted: boolean;
  deletedDate?: any;
  deletedBy?: any;
}