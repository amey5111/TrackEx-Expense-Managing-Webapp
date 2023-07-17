import mongoose, { model } from "mongoose";

const expenseSchema = new mongoose.Schema({
  date: {
    type: Date,
  },
  givento: String,
  Ammount: Number,
  ExpenseNote: String,
});

export default mongoose.models.Expense ||
  mongoose.model("Expense", expenseSchema);
