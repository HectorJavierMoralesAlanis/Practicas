<?php
    
    try{
        $pdo = new PDO ('mysql:host=localhost; dbname=productos2','root','');
    }catch( PDOException $e){
        echo 'Error al conectarnos: '.$e->getMessage();
    }
?>