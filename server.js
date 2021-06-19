const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const app = express();

const PORT = config.get("port") || 3001;

app.use(express.json({ extended: true }));
app.use("/api/auth", require("./routes/auth.routes"));

let users = {
    usersList: [
        { id: 0, name: "Mikk", address: "Narnia", status: "Some words", isFriend: false },
        { id: 1, name: "Io", address: "MiddleEarth", status: "Some", isFriend: false },
        { id: 2, name: "Ann", address: "MiddleEarth", status: " words", isFriend: true },
        { id: 3, name: "R", address: "Narnia", status: "Some woods", isFriend: false },
        { id: 4, name: "Ty", address: "Doo", status: "SomeSomeSome words", isFriend: true },
        { id: 5, name: "Qw", address: "Narnia", status: "Some SomeSomeSome", isFriend: false },
        { id: 6, name: "Porro", address: "MiddleEarth", status: "words words", isFriend: false },
        { id: 7, name: "Velma", address: "Doo", status: "Some Some", isFriend: true },
        { id: 8, name: "Elena", address: "Doom", status: "Some Some", isFriend: false },
    ]
};

app.get("/users", (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')

    const page = req.query.page;
    const limit = req.query.limit;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    let result = users.usersList.slice(startIndex, endIndex);
    res.json({ usersList: [...result], totalCount: users.usersList.length });
});
app.get("/users/:userId", (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')

    const userId = req.params["userId"];
    let result;
    for (user of users.usersList) {
        if (user.id == userId) {
            result = user;
            break;
        }
    }
    res.json({ ...result });
});

async function start() {
    try {
        await mongoose.connect(config.get("mongoUrl"), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        app.listen(PORT, () => {
            console.log(`Server listening on ${PORT}`);
        });
    } catch (e) {
        process.exit(1);
    }
}

start();