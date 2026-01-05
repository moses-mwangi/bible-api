import express from "express";
import testRoute from "./routes/test_route";

const app = express();

app.use("/", testRoute);

export default app;
