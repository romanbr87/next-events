import mongoose, { Schema, Model, Document } from "mongoose";
import { address, contacts } from "../../../shared/types";
import { Persons } from "./persons.schema";

export interface VatFreeBis extends Document {
  id: string;
  name: string;
  owner: Persons[];
  address: address;
  contacts: contacts[];
}

export const vatFreeBisSchema: Schema<
  VatFreeBis,
  Model<VatFreeBis>
> = new Schema<VatFreeBis, Model<VatFreeBis>>({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  owner: { type: [Schema.Types.ObjectId], required: true, ref: 'persons' },
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
});

export const VatFreeBisModel: Model<VatFreeBis> = mongoose.model<VatFreeBis>(
  "VatFreeBis",
  vatFreeBisSchema,
);
