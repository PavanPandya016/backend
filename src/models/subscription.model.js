import mongoose, { model, Schema } from "mongoose";

const subscriptionSchema = new Schema(
  {
    subscribler: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    channel: {
      type: Schema.type.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {timestamps: true}
);

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
