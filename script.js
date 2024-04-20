document.getElementById('weightForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var gender = document.getElementById('gender').value;
    var goal = document.getElementById('goal').value;
    var resultDiv = document.getElementById('result');
  

    var exercises = [];
    var foods = [];
    
    // Select exercises and foods based on gender and goal
    if (gender === 'male') {
        if (goal === 'gain') {
            exercises = ["Squats", "Bench Press", "Deadlifts", "Pull-ups", "Barbell Rows", "Overhead Press", "Dumbbell Lunges", "Bicep Curls", "Tricep Dips", "Leg Press"];
            foods = ["Chicken Breast", "Salmon", "Brown Rice", "Sweet Potatoes", "Whole Milk", "Avocado", "Nuts", "Olive Oil", "Bananas", "Oatmeal"];
        } else if (goal === 'lose') {
            exercises = ["Running", "Cycling", "Swimming", "Jump Rope", "Burpees", "HIIT Workouts", "Plank", "Push-ups", "Squats", "Crunches"];
            foods = ["Green Vegetables", "Lean Protein (Chicken, Turkey)", "Fish", "Quinoa", "Greek Yogurt", "Berries", "Eggs", "Almonds", "Oatmeal", "Lentils"];
        } else {
            exercises = ["Walking", "Yoga", "Pilates", "Cycling", "Swimming", "Bodyweight Exercises", "Resistance Band Workouts", "Light Weightlifting", "Stretching", "Tai Chi"];
            foods = ["Vegetables", "Fruits", "Whole Grains", "Lean Protein", "Healthy Fats", "Low-Fat Dairy", "Nuts", "Seeds", "Legumes", "Water"];
        }
    } else {
        if (goal === 'gain') {
            exercises = ["Squats", "Deadlifts", "Lunges", "Leg Press", "Hip Thrusts", "Glute Bridges", "Chest Press", "Bicep Curls", "Tricep Dips", "Shoulder Press"];
            foods = ["Salmon", "Chicken Breast", "Lean Beef", "Tofu", "Quinoa", "Brown Rice", "Sweet Potatoes", "Avocado", "Nuts", "Greek Yogurt"];
        } else if (goal === 'lose') {
            exercises = ["Running", "Cycling", "Swimming", "Jump Rope", "Burpees", "HIIT Workouts", "Plank", "Push-ups", "Squats", "Crunches"];
            foods = ["Green Vegetables", "Lean Protein (Chicken, Turkey)", "Fish", "Quinoa", "Greek Yogurt", "Berries", "Eggs", "Almonds", "Oatmeal", "Lentils"];
        } else {
            exercises = ["Walking", "Yoga", "Pilates", "Cycling", "Swimming", "Bodyweight Exercises", "Resistance Band Workouts", "Light Weightlifting", "Stretching", "Tai Chi"];
            foods = ["Vegetables", "Fruits", "Whole Grains", "Lean Protein", "Healthy Fats", "Low-Fat Dairy", "Nuts", "Seeds", "Legumes", "Water"];
        }
    }

    // Display exercises and foods
    resultDiv.innerHTML = "<br><h1>Recommended Exercises:</h1><ul><br>";
    exercises.forEach(function(exercise) {
        resultDiv.innerHTML += "<li>" + exercise + "</li>";
    });
    resultDiv.innerHTML += "<br><br><br><br></ul><h1>Recommended Foods:</h1><ul><br>";
    foods.forEach(function(food) {
        resultDiv.innerHTML += "<li>" + food + "</li>";
    });
    resultDiv.innerHTML += "</ul>";
    
});







function addWorkout() {
    var input = document.getElementById("workoutInput");
    var workout = input.value;
    if (workout === '') {
        alert("Please enter a workout name");
        return;
    }
    var workoutList = document.getElementById("workoutList");
    var workoutItem = document.createElement("div");
    workoutItem.classList.add("workout-item");
    workoutItem.innerHTML = `
        <input type="checkbox" onchange="toggleCompleted(this)">
        <span>${workout}</span>
        <button class="button" onclick="removeWorkout(this)">Remove</button>
    `;
    workoutList.appendChild(workoutItem);
    input.value = '';
}

function toggleCompleted(checkbox) {
    var workoutItem = checkbox.parentNode;
    workoutItem.classList.toggle("completed");
}

function removeWorkout(button) {
    var workoutItem = button.parentNode;
    workoutItem.remove();
}