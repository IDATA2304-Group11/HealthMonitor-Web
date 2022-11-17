<?php

include "../db.php";

$sql = "SELECT DISTINCT PID, name, DateOfBirth, Status
        FROM Patient 
        WHERE Status = 'critical'
        OR Status = 'unusual'
        ORDER BY Status ASC, PID"; 

$query = mysqli_query($mysqli, $sql)
            or die (mysqli_error($mysqli));

$row = mysqli_fetch_array($query);

$sta = "<i class='journalBtn' onClick='openJournal(this.id)' id='";
$end = "'>See Journal</i>";

if ($row != false && $row != null) {
    do {
        $btn = $sta . $row['PID'] . $end;
        $status = "<td><i class=status-" . $row['Status'] . ">" . strtoupper($row['Status']) . "</i></td>";
        $name = "<td>" . ucwords($row['name']) . "</td>";
        echo
            "<tr>
                <td>{$row['PID']}</td>
                $name
                <td>{$row['DateOfBirth']}</td>
                $status
                <td>$btn</td>
            </tr>";
        } while ($row = mysqli_fetch_array($query));
    echo "</table>";
} else {
    echo "<p style='text-align:center'>No records found.</p>";
}