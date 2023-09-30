import mongoose, { Schema, Model, Document } from "mongoose";
import {
  Status,
  StatusEnum,
  ClientType,
  ClientTypeEnum,
} from "../../../shared/types";

export interface Clients extends Document {
  clNum: string;
  clStatus: Status;
  clType: ClientType;
  clOrders: number[];
}

export const clientsSchema: Schema<Clients, Model<Clients>> = new Schema<
  Clients,
  Model<Clients>
>({
  clNum: { type: String, required: true, unique: true },
  clStatus: {
    type: String,
    enum: StatusEnum,
    required: true,
    default: StatusEnum.Potential,
  },
  clType: { type: String, enum: ClientTypeEnum, required: true },
  clOrders: { type: [Number], required: false, ref: "Saleorders" },
});

export const ClientsModel: Model<Clients> = mongoose.model<Clients>(
  "Clients",
  clientsSchema,
);
