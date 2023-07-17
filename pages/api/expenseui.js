import Expense from "../../models/user_expense";
import dbConnect from "../../config/dbConnect";

export default async function Expensehandler(req, res) {
  if (req.method === "POST") {
    dbConnect();

    const { date, givento, Ammount, ExpenseNote } = req.body;

    const expense = await Expense.create({
      date,
      givento,
      Ammount,
      ExpenseNote,
    });

    res.status(201).json({ expense });
  }
}
