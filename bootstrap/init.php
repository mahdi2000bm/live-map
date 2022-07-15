<?php 
    include 'const.php';

    defined(BASEPATH) || die('permission denid!');
    include 'config.php';

    $dsn = "mysql:dbname=$dbConfig->dbname;host=$dbConfig->hostname;";
    try {
        $conn = new PDO($dsn, "root", "");
    } catch (PDOException $result_e) {
        die($result_e);
    }

     include BASEPATH . '\libs\helper.php';
     include BASEPATH . '\libs\libs-location.php';
     include BASEPATH . '\libs\auth.php';
