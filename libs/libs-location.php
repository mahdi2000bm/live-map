<?php 
    function insertLocation($data){
        global $conn;
        $sql = "INSERT INTO `business_locations` (`b_name`, `b_lat`, `b_lng`, `b_type`) VALUES (:title, :lat, :lng, :typ);";
        $stmt = $conn->prepare($sql);
        $stmt->execute([':title'=>$data['namebusiness'],':lat'=>$data['latloc'],':lng'=>$data['lngloc'],':typ'=>$data['typebusiness']]);    
        return $stmt->rowCount();
    }
    function getLocations($data){
        global $conn;
        $sql = "SELECT * FROM `business_locations`";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_OBJ);
    }