import { ChemicalServer } from "chemicaljs";
import express from "express";
console.log("ASD")
const chemical = new ChemicalServer();
const port = process.env.PORT || 1337;

chemical.app.use(express.static("public", {
    index: "index.html",
    extensions: ["html"]
}));

chemical.server.listen(port, () => {
    console.log(`Chemical demo listening on port ${port}`);
});