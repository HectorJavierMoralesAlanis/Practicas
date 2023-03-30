<?php
    include_once('./utilities.php');
    $usuarios = getAll();

    if(isset($_POST['descripcionP'])&&isset($_POST['precio_venta'])&&isset($_POST['precio_compra'])&&isset($_POST['categoria_producto'])){
        addProductoCategoria($_POST['descripcionP'],$_POST['precio_venta'],$_POST['precio_compra'],$_POST['categoria_producto']);
    }
?>
<html>
<head>
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous">
</head>
<body class="text-bg-dark bg-gradient p-4">
    <?php require_once("./header.php")?>
    <div class="container">
        <center>
            <h2>Agregar productos</h2>
        </center>
        <br>
        <form method="POST" action="./addProducto.php">
            <br>
            <div>
                <label for="descripcionP" class="form-label">Ingresa la descripcion del producto</label>
                <br>
                <input id="descripcionP" name="descripcionP" class="form-control">
            </div>
            <div>
                <label for="precio_venta" class="form-label">Ingresa el precio de venta</label>
                <br>
                <input id="precio_venta" name="precio_venta" class="form-control">
            </div>
            <div>
                <label for="precio_compra" class="form-label">Inresa el precio de compra</label>
                <br>
                <input id="precio_compra" name="precio_compra" class="form-control">
            </div>
            <div>
                <label for="categoria_producto" class="form-label">Seleccione la categoria</label>
                <br>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Categorias</option>
                    <?php foreach($usuarios as $id =>$user){?>
                        <option id="categoria_producto" name="categoria_producto" value="1"><?php echo $user['categoria']?></option>
                    <?php }?>
                </select>
            </div>
            <br>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="submit" class="btn btn-primary me-md-2">Guardar</button>
            </div>
        </form>
    </div>
</body>
</html>