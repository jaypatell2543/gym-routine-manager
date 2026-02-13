async function loadExercises() {
  const res = await fetch("/api/exercises");
  const exercises = await res.json();

  const list = document.getElementById("exerciseList");
  list.innerHTML = "";

  exercises.forEach(ex => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${ex.name} (${ex.muscleGroup})
      <button onclick="deleteExercise(${ex.id})">Delete</button>
    `;
    list.appendChild(li);
  });
}

async function addExercise() {
  const name = document.getElementById("name").value;
  const muscleGroup = document.getElementById("muscle").value;

  await fetch("/api/exercises", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, muscleGroup })
  });

  loadExercises();
}

async function deleteExercise(id) {
  await fetch(`/api/exercises/${id}`, { method: "DELETE" });
  loadExercises();
}

loadExercises();