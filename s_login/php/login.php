<?php

include "../../php/db.php";

$cred = explode(";", $_GET['q']);
$sql = "SELECT name FROM Users WHERE UID = " . "'" . $cred[0] . "'" .
        " AND password = " . "'" . $cred[1] . "'";



$query = mysqli_query($mysqli, $sql)
    or die (mysqli_error($mysqli));

$row = mysqli_fetch_array($query);
if ($row != false && $row != null) {
    $response = $row['name'];
} else {
    $response = null;
}
$mysqli->close();

print json_encode($response);