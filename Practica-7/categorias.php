<?php
    include_once('./utilities.php');
    $usuarios = getAll();
?>
<html>
<head>
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous">
</head>
<body class="text-bg-dark bg-gradient p-4">
    <?php
    require_once("./header.php");
    ?>
    <div class="container">
        <table class="table table-light table-striped-columns">
            <thead>
                <tr>
                    <th width="200">Id</th>
                    <th width="200">Nombre</th>
                    <th width="200">Descripcion</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach($usuarios as $id => $user){?>
                    <tr>
                        <td><?php echo $user['id']?></td>
                        <td><?php echo $user['categoria']?></td>
                        <td><?php echo $user['descripcion']?></td>
                    </tr>
                <?php }?>
            </tbody>
        </table>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <a href="./addCategoria.php" class="btn btn-primary me-md-2" type="button">Agregar Categoria</a>
        </div>
    </div>
</body>
</html>