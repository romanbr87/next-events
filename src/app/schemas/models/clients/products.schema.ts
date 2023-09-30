import mongoose, { Schema, Model, Document, Types } from "mongoose";
import {
  ProductCat,
  ProductType,
  ProductTypeEnum,
} from "../../../shared/types";

export interface Products extends Document {
  productNum: number;
  name: string;
  price: number;
  stock: number;
  avgCost: number;
  isAtomic: boolean;
  categories: ProductCat;
  productTree: [product: Types.ObjectId, quantity: number];
}

export const productsSchema: Schema<Products> = new Schema<
  Products,
  Model<Products>
>({
  productNum: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
  stock: { type: Number, required: true, default: 0 },
  avgCost: { type: Number, required: true, default: 0 },
  isAtomic: { type: Boolean, required: true, default: true },
  //categories: { type: Map, of: [String], required: true },
  categories: { type: Object, required: true }, // Changed "categoreist" to "categories" and set type to "Object"
  productTree: {
    type: [
      {
        product: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "Products",
        },
        quantity: { type: Number, required: true },
      },
    ],
    required: false,
  },
});

export const ProductsModel: Model<Products> = mongoose.model<Products>(
  "Products",
  productsSchema,
);
