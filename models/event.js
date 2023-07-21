import mongoose, { model } from "mongoose";
const eventSchema = new mongoose.Schema({
  User_Email: String,
  Events : [
    {
      Catagory: Number,
      Event_Name: String,
      Event_Date: {
        type: Date,
      },
      Event_Discription: String,
      Event_Expenses: [
        {
          date: {
            type: Date,
          },
          givento: String,
          Ammount: Number,
        },
      ],
    },
  ],
});

export default mongoose.models.Event || mongoose.model("Event", eventSchema);
