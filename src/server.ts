import express from "express";
import { EXAMPLE_NAME } from "../aha-shawn-poc-lib";


const app = express();
const port = process.env.PORT;

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
