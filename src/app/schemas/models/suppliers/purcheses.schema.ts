import mongoose, { Schema, Model, Document } from "mongoose";

export interface Purcheses extends Document {
  purcheseNum: number;
  name: string;
  price: number;
  isAtomic: boolean;
  categories: {
    [key: string]: string[];
  };
}

export const purchesesSchema: Schema<Purcheses> = new Schema<
  Purcheses,
  Model<Purcheses>
>({
  purcheseNum: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
  isAtomic: { type: Boolean, required: true, default: true },
    //categories: { type: Map, of: [String], required: true },
  categories: { type: Object, required: true }, // Changed "categoreist" to "categories" and set type to "Object"
});

export const PurchesesModel: Model<Purcheses> = mongoose.model<Purcheses>(
  "Purcheses",
  purchesesSchema,
);
