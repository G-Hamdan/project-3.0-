const express = require("express");
const cors = require("cors"); // Import cors
const app = express();
const port = 5000;
const usersRouter = require("./routes/users.js");
const sqlite3 = require("sqlite3").verbose();

// Enable CORS for all origins (for development purposes)
app.use(cors());

// If you want to restrict to your frontend origin, you can specify it:
// app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());
app.use("/api/", usersRouter);

app.get("/", (req, res) => {
	res.json({
		msg: "welcome to my users api ",
	});
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
