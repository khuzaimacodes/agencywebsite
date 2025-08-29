import mongoose, { Schema } from "mongoose";

const ContactSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    message: { type: String, required: true, trim: true },
    serviceType: { type: String, trim: true },
    budget: { type: String, trim: true },
    source: { type: String, trim: true },
    userAgent: { type: String },
    ip: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema);


