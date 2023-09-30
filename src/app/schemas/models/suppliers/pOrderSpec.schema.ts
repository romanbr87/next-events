import { Schema, Model, Document, } from "mongoose";

export interface POrdersSpec extends Document {
  pOrederNum: number;
  lineNum: number;
  purcheseNum: number;
  quantity: number;
}

export const pOrdersSpecSchema: Schema<POrdersSpec> = new Schema<
  POrdersSpec,
  Model<POrdersSpec>
>({
  pOrederNum: { type: Number, required: true, ref: "porders" }, //Primary key
  lineNum: { type: Number, required: true }, //Primary key
  purcheseNum: { type: Number, required: true, ref: "purcheses" },
  quantity: { type: Number, required: true },
});

export const POrdersSpecModel: Model<POrdersSpec> = mongoose.model<POrdersSpec>(
  "POrdersSpec",
  pOrdersSpecSchema,
);
