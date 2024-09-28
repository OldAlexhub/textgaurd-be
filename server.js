import express from "express";
import cors from "cors";
import router from "./routes/routes.js";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json({ limit: "32mb", extended: true }));

app.use("/", router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
