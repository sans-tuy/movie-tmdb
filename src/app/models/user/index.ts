import mongoose from "mongoose";

// create a model for users in mongodb using credential or oauth2 google

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      index: {
        unique: true,
        sparse: true,
      },
    },
    password: String,
    name: { type: String, default: "user" },
    avatar: String,
    provider: { type: String, default: "credential" },
  },
  { timestamps: true }
);

const User = mongoose.models?.User || mongoose.model("User", UserSchema);
export default User;
