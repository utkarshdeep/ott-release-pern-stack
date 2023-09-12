import express from 'express';

const app = express();

const PORT = 5000;

//Here you can add your routes
//Here's an example
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Server listening on the port  ${PORT}`);
})