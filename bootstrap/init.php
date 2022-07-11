<?php 
    include 'const.php';
    include 'config.php';

    $dsn = "mysql:dbname=$dbConfig->dbname;host=$dbConfig->hostname;";
    try {
        $conn = new PDO($dsn, "root", "");
    } catch (PDOException $result_e) {
        die($result_e);
    }

     include  BASEPATH . '\libs\helper.php';
     include BASEPATH . '\libs\libs-location.php';
