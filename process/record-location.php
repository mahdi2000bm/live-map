<?php 
    if(empty($_SERVER['HTTP_X_REQUESTED_WITH'])){    
      die('invalid request!');    
    }

    var_dump($_POST);
    
