<?php
    
    function isLoggedin()
    {
        global $adminInfo;

        if(isset($_SESSION["Loggedin"]) and $_SESSION["Loggedin"] == $adminInfo->admin["username"]){
            return true;
        }
        return false;
    }
    
    function authUser($data)
    {   
        global $adminInfo;

        #Validation
        if(!empty($data["username"]) && !empty($data["password"]))
        {
            if(password_verify($data["password"] , $adminInfo->admin["password"]) and $data["username"] == $adminInfo->admin["username"])
            {   
                $_SESSION["Loggedin"] = $adminInfo->admin["username"];
            }
        }
    }
