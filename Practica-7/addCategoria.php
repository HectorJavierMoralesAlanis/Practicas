<?php
include_once('./utilities.php');

if(isset($_POST['categoria'])&&isset($_POST['descripcion'])){
    $categoria1= $_REQUEST['categoria'];
    $descripcion1=$_REQUEST['descripcion'];
    echo $categoria1;
    addCategoria($categoria1,$descripcion1);
}
?>
<html>
<head>
    <title>Agregar Categoria</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous">
</head>
<body class="text-bg-dark bg-gradient p-4">
    <?php require_once("./header.php")?>
    <div class="container">
        <center>
            <h2>Agregar categoria productos</h2>
        </center>
        <br>
        <form method="POST" action="./addCategoria.php">
            <br>
            <div>
                <label for="categoria" class="form-label">Ingrese categoria:</label><br>
                <input id="categoria" name="categoria" class="form-control">
            <div>
            <br>
            <div>
                <label for="descripcion" class="form-label">Ingrese la descripcion</label><br>
                <input id="descripcion" name="descripcion" class="form-control">
            </div>
            <br>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="submit" class="btn btn-primary me-md-2">Guardar</button>
            </div>
        </form>
    </div>
</body>
</html>