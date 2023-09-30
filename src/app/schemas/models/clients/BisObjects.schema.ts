import mongoose, { Schema, Model, Document, Types } from "mongoose";
import {
  BisType,
  BisSubType,
  BisTypeEnum,
  BisSubTypeEnum,
  Contacts,
  Address,
} from "../../../shared/types";

export interface BisObjects extends Document {
  name: string;
  ObjectID: string;
  type: BisType;
  subType: BisSubType;
  contacts: Contacts;
  address: Address;
}

export const BisObjectsSchema: Schema<
  BisObjects,
  Model<BisObjects>
> = new Schema<BisObjects, Model<BisObjects>>({
  name: { type: String, required: true, unique: true },
  ObjectID: { type: String, required: true, unique: true },
  type: { type: String, enum: BisTypeEnum, required: true, unique: true },
  subType: { type: String, enum: BisSubTypeEnum, required: true, unique: true },
  contacts: {
    type: {
      phone: { type: String, required: true },
      whatsapp_phone: { type: String, required: false },
      email: { type: String, required: false },
      fb_user: { type: String, required: false },
      fb_page: { type: String, required: false },
      instagram_link: { type: String, required: false },
      telegram: { type: String, required: false },
      website_link: { type: String, required: false },
    },
    required: true,
  },
  address: {
    type: {
      area: { type: String, required: false },
      subArea: { type: String, required: false },
      settlement: { type: String, required: true },
      street: { type: String, required: false },
      houseNum: { type: String, required: false },
    },
    required: true,
  },
});

export const BisObjectsModel: Model<BisObjects> = mongoose.model<BisObjects>(
  "BisObjects",
  BisObjectsSchema,
);
