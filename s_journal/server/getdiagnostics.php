<?php

include $_SERVER['DOCUMENT_ROOT'] . "/php/db.php";

$sql = "SELECT ICD, Name FROM PatientDiagnostic WHERE PID LIKE '"; 
$sql = $sql . $_GET['q'] . "%'";

$query = mysqli_query($mysqli, $sql)
            or die (mysqli_error($mysqli));

$row = mysqli_fetch_array($query);

if ($row != false && $row != null) {
    do {
        $name = "<td class='dd'>" . ucwords($row['Name']) . "</td>";
        echo
            "<tr>
                <td class='dh'>{$row['ICD']}</td>
                $name
            </tr>";
        } while ($row = mysqli_fetch_array($query));
    echo "</table>";
} else {
    echo "<p style='text-align:center'>No records found.</p>";
}
$mysqli->close();