import mongoose, { Schema, Model, Document } from "mongoose";
import {
  Status,
  StatusEnum,
  ClientType,
  Address,
  Contacts,
} from "../../../shared/types";

export interface Persons extends Document {
  id: string;
  firstName: string;
  lastName: string;
  address: Address;
  contacts: Contacts;
  birthday: string;
}

export const personSchema: Schema<Persons, Model<Persons>> = new Schema<
  Persons,
  Model<Persons>
>({
  id: { type: String, required: false, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
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
  contacts: {
    type: {
      phone: { type: String, required: true },
      whatsapp_phone: { type: String, required: false },
      email: { type: String, required: false },
      fb_user: { type: String, required: false },
      fb_page: { type: String, required: false },
      instagram_link: { type: String, required: false }, // Add type declaration for instagram_link
      telegram: { type: String, required: false },
      website_link: { type: String, required: false },
    },
    required: true,
  },
  birthday: { type: Schema.Types.Date, required: false },
});

export const PersonsModel: Model<Persons> = mongoose.model<Persons>(
  "Persons",
  personSchema,
);
