<?php

include "../db.php";

$th = "<th style='border: 1px solid black'>";
$td = "<td style='border: 1px solid black'>";


$sql = "SELECT DISTINCT PID, name, age, gender FROM Patient WHERE name LIKE '%"; 
$sql = $sql . $_GET['q'] . "%'";


$query = mysqli_query($mysqli, $sql)
            or die (mysqli_error($mysqli));

$row = mysqli_fetch_array($query);

if ($row != false && $row != null) {
    echo "<table id='result'>";
        echo "<tr>";
            echo $th . "Patient ID</th>";
            echo $th . "Full Name</th>";
            echo $th . "Age</th>";
            echo $th . "Sex</th>";
        echo "</tr>";

    do {
        echo
            "<tr>
                $td {$row['PID']}</td>
                $td {$row['name']}</td>
                $td {$row['age']}</td>
                $td {$row['gender']}</td>
            </tr>";
        } while ($row = mysqli_fetch_array($query));
    echo "</table>";
} else {
    echo "<p style='text-align:center'>No records found.</p>";
}