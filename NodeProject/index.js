import express from "express";
import userRoutes from "./routes/userRoutes.js";

const PORT = 3000;
const app = express();

app.use(express.json())

app.use("/users", userRoutes);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});