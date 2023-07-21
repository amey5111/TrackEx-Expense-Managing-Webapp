import Event from "@/models/event";
import dbConnect from "../../config/dbConnect";
export default async function Eventhandler(req, res) {
  if (req.method === "POST") {
    dbConnect();

    const {
      User_Email,
      Events: [{ Catagory, Event_Name, Event_Date, Event_Discription }],
    } = req.body;
    const eventobject = { Catagory, Event_Name, Event_Date, Event_Discription };

    const User_Emailexists = await Event.findOne({ User_Email });
    if (User_Emailexists) {
      const event = await Event.updateOne(
        { User_Email: User_Email },
        { $push: { Events: eventobject } }
      );
      res.status(201).json({ event });
    } else {
      const event = await Event.create({
        User_Email,
        Events: [{ Catagory, Event_Name, Event_Date, Event_Discription }],
      });
      res.status(201).json({ event });
    }
  }
}
