<?php
    include_once('./utilities.php');
    $usuarios= getAllProductos();
?>
<html>
<head>
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous">
</head>
<body class="text-bg-dark bg-gradient p-4">
    <?php require_once("./header.php")?>
    <div class="container">
        <table class="table table-light table-striped-columns">
            <thead>
                <tr>
                    <th width="200">Descripcion</th>
                    <th width="200">Precio de venta</th>
                    <th width="200">Precio de compra</th>
                    <th width="200">Categorias</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach($usuarios as $id => $user){?>
                    <tr>
                        <td><?php echo $user['descripcion']?></td>
                        <td><?php echo $user['precio_venta']?></td>
                        <td><?php echo $user['precio_compra']?></td>
                        <td><?php echo $user['categoria_producto']?></td>
                    </tr>
                <?php }?>
            </tbody>
        </table>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <a href="./addProducto.php" class="btn btn-primary me-md-2" type="button">Agregar Productos</a>
        </div>
    </div>
</body>
</html>