<?php

include $_SERVER['DOCUMENT_ROOT'] . "/php/db.php";

$sql = "SELECT DISTINCT PID, name, DateOfBirth, gender, Status, Sensor FROM Patient WHERE PID LIKE '"; 
$sql = $sql . $_GET['q'] . "%'";

$query = mysqli_query($mysqli, $sql)
            or die (mysqli_error($mysqli));

$row = mysqli_fetch_array($query);


if ($row != false && $row != null) {
    do {
        $name = ucwords($row['name']);
        $sex = ucwords($row['gender']);
        $status = strtoupper($row['Status']);
        echo
            "
                <strong>PID</strong>: <i>{$row['PID']}</i><br>
                <strong>Name</strong>: <i>{$name}</i><br>
                <strong>Date of Birth</strong>: <i>{$row['DateOfBirth']}</i><br>
                <strong>Sex</strong>: <i>{$sex}</i><br>
                <br>
                <strong>Status</strong>: <i class='status-{$row['Status']}'>{$status}</i><br>
                <strong>Sensor</strong>: <i>{$row['Sensor']}</i><br>
            ";
        } while ($row = mysqli_fetch_array($query));
    echo "</div>";
} else {
    echo "<p style='text-align:center'>No records found.</p>";
}

$mysqli->close();