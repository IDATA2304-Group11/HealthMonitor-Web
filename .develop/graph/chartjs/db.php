<?php

/** 
 * Establishes connection to the datbase server and the
 * requested database. Other server-files will make use
 * of the variable $mysqli to run queries.
 *
 * @author jorgenfinsveen
 * @since 14-11-2022
 * @version 15-11-2022
*/

define('HOSTNAME', 'mysql579.loopia.se');
define('USERNAME', 'windows@f328341');
define('PASSWORD', 'NtnuGruppe11');
define('DATABASE', 'finsveen_dev');

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli(HOSTNAME, USERNAME, PASSWORD, DATABASE,);
mysqli_set_charset($mysqli, 'utf8');