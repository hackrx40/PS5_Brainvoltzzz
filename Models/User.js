import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  name: {
    type: String,
    required: [true, "Name is required!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
  },
  image: {
    type: String,
    default: null,
  },
  password: {
    type: string,
  },
  currentTokens: {
    type: Number,
    default: 0,
  },
  currentTier: {
    type: String,
    default: "Bronze",
    enum: ["Bronze", "Silver", "Gold", "Diamond", "Elite"],
  },
  dreamProductType: {
    type: String,
    default: null,
  },
  dreamProduct: {
    type: String,
    default: null,
  },
  lastTransactionRefresh: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  transactions: [
    {
      date: {
        type: Date,
        default: Date.now,
      },
      category: {
        type: String,
        required: [true, "Category is required!"],
        enum: [
          "Shopping",
          "Food",
          "Transport",
          "Rent",
          "Installment",
          "Electronics",
          "Others",
        ],
      },
      title: {
        type: String,
        required: [true, "Title is required!"],
      },
      amount: {
        type: Number,
        required: [true, "Amount is required!"],
      },
      image: {
        type: String,
        required: [true, "Image is required!"],
      },
    },
  ],
});

const User = models.User || model("User", UserSchema);

export default User;
