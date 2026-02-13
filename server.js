const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const dataPath = path.join(__dirname, "data", "exercises.json");

// ---------- Helper Functions ----------
function readExercises() {
  return JSON.parse(fs.readFileSync(dataPath));
}

function writeExercises(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

// ---------- HTML Routes ----------
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/routine", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "routine.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

// ---------- REST API ----------
app.get("/api/exercises", (req, res) => {
  const exercises = readExercises();
  res.status(200).json(exercises);
});

app.post("/api/exercises", (req, res) => {
  const exercises = readExercises();
  const newExercise = {
    id: Date.now(),
    name: req.body.name,
    muscleGroup: req.body.muscleGroup
  };

  exercises.push(newExercise);
  writeExercises(exercises);

  res.status(201).json(newExercise);
});

app.delete("/api/exercises/:id", (req, res) => {
  let exercises = readExercises();
  const id = parseInt(req.params.id);

  const filtered = exercises.filter(ex => ex.id !== id);

  if (filtered.length === exercises.length) {
    return res.status(404).json({ message: "Exercise not found" });
  }

  writeExercises(filtered);
  res.status(200).json({ message: "Exercise deleted" });
});

// ---------- 404 ----------
app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});