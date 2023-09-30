import { Schema, Model, Document } from "mongoose";
import { OrderStatus, OrderStatusEnum } from "../../../shared/types";

export interface POrders extends Document {
  pOrederNum: number;
  supNum: string,
  pOroderStatus: OrderStatus,
  purchesesPrice: number,
  discount: number,
  finalPrice: number,
  outCome: number,
}

export const pOrdersSchema: Schema<POrders> = new Schema<POrders, Model<POrders>>({
  pOrederNum: { type: Number, required: true, unique: true },
  supNum: { type: String,  required: true, ref: 'suppliers' },
  pOroderStatus: { type: String, enum: OrderStatusEnum, required: true, default: 'New' },
  purchesesPrice: { type: Number, required: true, default: 0 },
  discount: { type: Number, required: true, default: 0 },
  finalPrice: { type: Number, required: true  },
  outCome: { type: Number, required: true, default: 0 },
});

export const POrdersModel: Model<POrders> = mongoose.model<POrders>(
  "POrders",
  pOrdersSchema,
);

