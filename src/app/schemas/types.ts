export type Status =
  | "Potential"
  | "New"
  | "NotActual"
  | "InProgress"
  | "Active"
  | "BlackList"
  | "Delete"
  | "Test";

export enum StatusEnum {
  Potential = "Potential",
  New = "New",
  NotActual = "NotActual",
  InProgress = "InProgress",
  Active = "Active",
  BlackList = "BlackList",
  Delete = "Delete",
  Test = "Test",
}

export type OrderStatus =
  | "New"
  | "Active"
  | "Finished"
  | "Canceled"
  | "Delete"
  | "Test"
  | "InProgress";

export enum OrderStatusEnum {
  New = "New",
  Active = "Active",
  Finished = "Finished",
  Canceled = "Canceled",
  Delete = "Delete",
  Test = "Test",
  InProgress = "InProgress",
}

export type orderType = "SaleOrder" | "PurchaseOrder" | "InnerOrder";
export enum OrderTypeEnum {
  SaleOrder = "SaleOrder",
  PurchaseOrder = "PurchaseOrder",
  InnerOrder = "InnerOrder",
}

export type SupType =
  | "VAT_Bis"
  | "Licensed_Bis"
  | "Company_LTD"
  | "NPO"
  | "GovOrg";

export type ClientType = "Person" | SupType;

export type BisType = "Client" | "Supplier" | "Employee";
export enum BisTypeEnum {
  Client = "Client",
  Supplier = "Supplier",
  Employee = "Employee",
}
export type BisSubType =
  | "Person"
  | "VAT_Free"
  | "Licensed"
  | "Company"
  | "NPO"
  | "GovOrg";
export enum BisSubTypeEnum {
  Person = "Person",
  VAT_Free = "VAT_Free",
  Licensed = "Licensed",
  Company = "Company",
  NPO = "NPO",
  GovOrg = "GovOrg",
}

export enum SupTypeEnum {
  VAT_Bis = "VAT_Bis",
  Licensed_Bis = "Licensed_Bis",
  Company_LTD = "Company_LTD",
  NPO = "NPO",
  GovOrg = "GovOrg",
}

export enum ClientTypeEnum {
  Person = "Person",
  VAT_Bis = "VAT_Bis",
  Licensed_Bis = "Licensed_Bis",
  Company_LTD = "Company_LTD",
  NPO = "NPO",
  GovOrg = "GovOrg",
}

export type Address = {
  area: string;
  subArea: string;
  settlement: string;
  street: string;
  houseNum: string;
};

export type Contacts = {
  phone: string;
  whatsapp_phone: string;
  email: string;
  fb_user: string;
  fb_page: string;
  instagram_link: string;
  telegram: string;
  website_link: string;
};

export type ProductType = "MyProduct" | "PurchProduct"
export enum ProductTypeEnum {
  MyProduct = "MyProduct", 
  PurchProduct= "PurchProduct"
}

export type ProductCat = {
  [key: string]: string[];
};

export const Categories: ProductCat = {
  BodyMind: ["Yoga", "QiGong", "Tai Chi"],
  ActiveLeisure: ["Bouldering"],
  Outdoor: ["Hiking"],
};
