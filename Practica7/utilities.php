<?php
    include('./conexion.php');

    //Funcion para obtener todas las categorias
    function getAll(){
        global $pdo;

        $sql = "SELECT * from categoria";

        $statement = $pdo->prepare($sql);

        $statement->execute();
        $results=$statement->fetchAll();

        return $results;
    }

    //Funcion para obtner todas los productos
    function getAllProductos(){
        global $pdo;

        $sql = "SELECT * from productosl";

        $statement = $pdo->prepare($sql);

        $statement->execute();
        $results=$statement->fetchAll();

        return $results;
    }

    //Funcion para agregar categoria
    function addCategoria($categoria,$descripcion){
        global $pdo;

        $sql = "INSERT INTO categoria VALUES(' ','$categoria','$descripcion')";

        $statement = $pdo->prepare($sql);
        $statement->execute();
    }

    //Funcion para agregar productos
    function addProductoCategoria($descripcionP,$precio_venta,$precio_compra,$categoria_producto){
        global $pdo;

        $sql = "INSERT INTO productosl VALUES(' ','$descripcionP','$precio_venta','$precio_compra','$categoria_producto')";

        $statement = $pdo -> prepare($sql);
        $statement->execute();
    }
?>