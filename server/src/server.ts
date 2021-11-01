import mongoose from "mongoose";
import app from "./app";

const port = process.env.PORT;
const mongUri = process.env.MONGODB_URI ??''
mongoose
  .connect(
    mongUri
  )
  .then(() => {
    // Start Express server
    app.listen(port, () => {
      console.log(`App is running at port ${port}`);
      console.log("  Press CTRL-C to stop\n");
    });
  })
  .catch((error) => {
    console.log(
      "MongoDB connection error. Please make sure MongoDB is running. " + error
    );
    process.exit(1);
  });
