import mongoose, { Schema, Model, Document, Types } from "mongoose";
import { orderType, OrderTypeEnum } from "../../../shared/types";

export interface Orders extends Document {
  orderNum: number;
  orderType: orderType;
  price: number;
  discount: number;
  partner: Types.ObjectId;
  line: { product: Types.ObjectId; quantity: number; required: boolean };
}

export const OrdersSchema: Schema<Orders, Model<Orders>> = new Schema<
  Orders,
  Model<Orders>
>({
  orderNum: { type: Number, required: true, unique: true },
  orderType: {
    type: String,
    enum: OrderTypeEnum,
    required: true,
    unique: true,
  },
  price: { type: Number, required: true, default: 0 },
  discount: { type: Number, required: true, default: 0 },
  partner: { type: Schema.Types.ObjectId, required: true, ref: "BisObjects" },
  line: [
    {
      product: { type: Schema.Types.ObjectId, required: true, ref: "Products" },
      quantity: { type: Number, required: true },
      required: { type: Boolean, required: true }
    },
  ],
});

export const OrdersModel: Model<Orders> = mongoose.model<Orders>(
  "SaleOrders",
  OrdersSchema,
);
