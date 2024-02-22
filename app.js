document.getElementById("calculate_btn").addEventListener("click", function () {
  // Get the values of total lectures and attended lectures from the input fields
  let total_lectures = parseInt(
    document.getElementById("total_lectures").value
  );
  let attended_lectures = parseInt(
    document.getElementById("attended_lectures").value
  );

  // Calculate attendance percentage
  let attendance = (attended_lectures / total_lectures) * 100;

  // Check if attendance is already 75% or more
  if (attendance >= 75) {
    document.getElementById("attendance").innerText =
      "Attendance: " + attendance.toFixed(2) + "%";
    document.getElementById("needed_lectures").innerText =
      "You have reached 75% attendance!";
  } else {
    // Calculate additional lectures needed for 75% attendance
    let needed_lectures = Math.ceil(0.75 * total_lectures - attended_lectures);
    // Update the result elements with the calculated values
    document.getElementById("attendance").innerText =
      "Attendance: " + attendance.toFixed(2) + "%";
    document.getElementById("needed_lectures").innerText =
      "Lectures need to attend: " + needed_lectures;
  }
  // Show the result div
  document.getElementById("result").style.display = "block";
});
