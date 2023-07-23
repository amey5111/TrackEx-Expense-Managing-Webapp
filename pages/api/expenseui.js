import Expense from "../../models/user_expense";
import dbConnect from "../../config/dbConnect";

export default async function Expensehandler(req, res) {
  if (req.method === "POST") {
    dbConnect();

    const {
      User_Email,
      Expenses: [{ date, givento, Ammount, ExpenseNote }],
    } = req.body;
    const object = { date, givento, Ammount, ExpenseNote }
    const User_Emailexists = await Expense.findOne({ User_Email });
    if (User_Emailexists) {
      const expense = await Expense.updateOne({User_Email : User_Email },
        { $push: {Expenses: object }}
        );
        res.status(201).json({ expense });
    } else {
      const expense = await Expense.create({
        User_Email,
        Expenses: [{ date, givento, Ammount, ExpenseNote }],
      });

      res.status(201).json({ expense });
    }
  }

  //get function  expense
  
  if (req.method === 'GET') {
    dbConnect();
    try {
      const expenses = await Expense.find();
      res.status(200).json(expenses);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  }
}
