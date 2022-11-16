<?php
//setting header to json
header('Content-Type: application/json');

include "db.php";

// Query TIME
$query = sprintf(
       "SELECT Time, Sys, Dia, HR 
        FROM PatientData 
        WHERE PID = 1001
        ORDER BY UNIX_TIMESTAMP(Time) ASC"
);



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