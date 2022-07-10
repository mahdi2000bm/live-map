<?php 
    if(empty($_SERVER['HTTP_X_REQUESTED_WITH'])){    
      die('invalid request!');    
    }

    include 'bootstrap/init.php';

    if(isset($_POST['action']))
    {
      switch ($_POST['action']){
        case 'record-business':
          insertLocation($_POST);
        break;
        default:
            echo 'invalid request!';
        break;
      }
    }


