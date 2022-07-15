<?php 
    session_start();
    include "bootstrap/init.php";
    

    if(isset($_GET["logout"]) && $_GET["logout"] == 1)
    {  
        if(isset($_SESSION["Loggedin"]))
        {
            unset($_SESSION["Loggedin"]);
        }
    }

    if( isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] == "POST")
    {
        authUser($_POST);
    }

    if(isLoggedin())
    {   
        $locations = getLocations();
        include "tpl/tpl-panel.php";

    }else{
        include "tpl/tpl-auth.php";
    }
