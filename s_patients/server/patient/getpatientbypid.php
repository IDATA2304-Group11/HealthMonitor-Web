<?php

include "../db.php";

$sql = "SELECT DISTINCT PID, name, age, gender FROM Patient WHERE PID LIKE '"; 
$sql = $sql . $_GET['q'] . "%'";


$query = mysqli_query($mysqli, $sql)
            or die (mysqli_error($mysqli));

$row = mysqli_fetch_array($query);

$sta = "<i class='journalBtn' onClick='openJournal(this.id)' id='";
$end = "'>See Journal</i>";

if ($row != false && $row != null) {
    do {
        $btn = $sta . $row['PID'] . $end;
        echo
            "<tr>
                <td>{$row['PID']}</td>
                <td>{$row['name']}</td>
                <td>{$row['age']}</td>
                <td>{$row['gender']}</td>
                <td>$btn</td>
            </tr>";
        } while ($row = mysqli_fetch_array($query));
    echo "</table>";
} else {
    echo "<p style='text-align:center'>No records found.</p>";
}