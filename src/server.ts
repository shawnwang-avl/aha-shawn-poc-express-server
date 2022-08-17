import express from "express";


const app = express();
const port = process.env.PORT;

app.get("/", (request, response) => {
    response.send("Vrrooooom! 🚙💨" +
        "\n Hello! server is responding you");

});

app.listen(port, (err?: Error) => {
    if (err) {
        return console.error("Yiikes something exploded:", err);
    }

    console.log(`Server ready on http://localhost:${ port } 🤟`);
});
