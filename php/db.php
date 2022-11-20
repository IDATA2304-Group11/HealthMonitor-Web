<?php

/** 
 * Establishes connection to the datbase server and the
 * requested database. Other server-files will make use
 * of the variable $mysqli to run queries.
 *
 * @author  jorgenfinsveen
 * @since   14-11-2022
 * @version 15-11-2022
*/

$hostname = 'mysql579.loopia.se';
$username = 'windows@f328341';
$password = 'NtnuGruppe11';
$database = 'finsveen_dev';

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = mysqli_connect($hostname, $username, $password, $database);
mysqli_set_charset($mysqli, 'utf8');