<html>
    <head>
        <title>Formulario de registro de producto</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous">
    </head>
<body class="text-bg-dark bg-gradient p-4">
<div class="container ">
    <center>
        <h1>Formulario de registro de Productos</h1>
        <form action="insert.php" method="post">
            <p>
                <label for="codigo">Ingrese el codigo:</label>
                <input type="text" name="coDigo" id="codigo" class="form-control" />
            </p>
            <p>
                <label for="nombre">Ingrese el nombre:</label>
                <input type="text" name="nomBre" id="nombre" class="form-control" />
            </p>
            <p>
                <label for="categoria">Ingrese la categoria:</label>
                <input type="text" name="cateGoria" id="categoria" class="form-control" />
            </p>
            <p>
                <label for="precio_venta">Ingrese el precio de venta</label>
                <input type="text" name="precioVenta" id="precio_venta" class="form-control" />
            </p>
            <p>
                <label for="precio_compra">Ingrese el precio de compra:</label>
                <input type="text" name="precioCompra" id="precio_compra" class="form-control" />
            </p>
            <input type="submit" class="Enviar btn btn-success"/>
        </form>
    </center>
</div>
</body>
</html>