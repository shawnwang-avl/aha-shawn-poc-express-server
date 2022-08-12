import express from "express";
import { EXAMPLE_NAME } from "../aha-shawn-poc-lib";

const app = express();
const port = 3000;

app.get("/", (request, response) => {
    response.send("Vrrooooom! 🚙💨" +
        "\n Using lib to import name: " + EXAMPLE_NAME);

});

app.listen(port, (err?: Error) => {
    if (err) {
        return console.error("Yiikes something exploded:", err);
    }

    console.log(`Server ready on http://localhost:${ port } 🤟`);
});
