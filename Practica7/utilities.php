<?php
    include('./conexion.php');
    function getAll(){
        global $pdo;

        $sql = "SELECT * from categoria";

        $statement = $pdo->prepare($sql);

        $statement->execute();
        $results=$statement->fetchAll();

        return $results;
    }
    function getAllProductos(){
        global $pdo;

        $sql = "SELECT * from productosl";

        $statement = $pdo->prepare($sql);

        $statement->execute();
        $results=$statement->fetchAll();

        return $results;
    }
    function addCategoria($categoria,$descripcion){
        global $pdo;

        $sql = "INSERT INTO categoria VALUES('$categoria','$descripcion')";

        $statement = $pdo->prepare($sql);
        $statement->execute();
    }
    function addProductoCategoria($descripcion,$precio_venta,$precio_compra,$categoria_producto){
        global $pdo;

        $sql = "INSERT INTO productosl VALUES('$descripcion','$precio_venta','$precio_compra','$categoria_producto')";

        $statement = $pdo -> prepare($sql);
        $statement->execute();
    }
?>