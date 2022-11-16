<?php

include "../db.php";

$sql = "SELECT * FROM Patient WHERE Patient.name = ?";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($pid, $name, $age, $sex);
$stmt->fetch();
$stmt->close();

$td = "<td style='border: 1px solid black'>";
$th = "<th style='border: 1px solid black'>";

echo "<table id='patientTable'>";
    echo "<tr>";
        echo $th . "Patient ID</th>";
        echo $th . "Full Name</th>";
        echo $th . "Age</th>";
        echo $th . "Sex</th>";
    echo "</tr>";

    echo "<tr style='border: 1px solid black'>";
        echo $td . $pid . "</td>";    
        echo $td . $name . "</td>";
        echo $td . $age . "</td>";
        echo $td . $sex . "</td>";
    echo "</tr>";
echo "</table>";