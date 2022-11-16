<?php
//setting header to json
header('Content-Type: application/json');

include "db.php";

// Query TIME
$req = "SELECT Time, Sys, Dia, HR 
        FROM PatientData 
        WHERE PID ="; 
        
$req = $req . $_GET['q'] . " ORDER BY UNIX_TIMESTAMP(Time) ASC";

$query = sprintf($req);


//execute query
$result = $mysqli->query($query);


//loop through the returned data
$data = array();


foreach ($result as $row) $data[] = $row;


//free memory associated with result
$result->close();
$mysqli->close();


//now print the data
print json_encode($data);