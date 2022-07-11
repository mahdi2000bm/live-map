<?php 
    include "bootstrap/init.php";

    if(isloggedin()){
        include "tpl/tpl-panel.php";
    }else{
        include "tpl/tpl-auth.php";
    }