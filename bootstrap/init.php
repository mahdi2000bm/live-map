<?php 
    include 'const.php';
    include 'config.php';

    $dsn = "mysql:dbname=$dbConfig->dbname;host=$dbConfig->hostname;";
    try {
        $conn = new PDO($dsn, "root", "");
    } catch (PDOException $result_e) {
        die($result_e);
    }

    include 'libs/helper.php';
    include 'libs/libs-location.php';