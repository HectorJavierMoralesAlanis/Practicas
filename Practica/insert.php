<html>
    <head>
        <title>Formulario de productos</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous">
    </head>
    <body class="text-bg-dark bg-gradient p-4">
        <div class="container">
            <center>
                <?php
                //Conexion a la base de datos
                $con=mysqli_connect("localhost","root","","productos");

                if($con == false){
                    die("Error,no hay conexion a la base de datos".mysqli_connect_error());
                }
                //Valores del formulario
                $codigo = $_REQUEST['coDigo'];
                $nombre = $_REQUEST['nomBre'];
                $categoria = $_REQUEST['cateGoria'];
                $precio_venta = $_REQUEST['precioVenta'];
                $precio_compra = $_REQUEST['precioCompra'];
                $sql = "INSERT INTO registro_productos VALUES ('$codigo','$nombre','$categoria','$precio_venta','$precio_compra')";
                //Mandar mensaje de datos guardados
                if(mysqli_query($con,$sql)){
                    echo "<h3> Datos almacenados correctamente."."Reviar MYSQL para cotejar  registro"."y actualizar de ser necesario<h3>";
                    //nl2br Inserta saltos de linea HTML de todos los nuevos STRINGS
                    echo nl2br ("\n$codigo\n$nombre\n$categoria\n$precio_venta\n$precio_compra");
                }else{
                    echo "ERROR! $sql.".mysqli_error ($con);
                }
                mysqli_close($con)
                ?>
            </center>
        </div>
    </body>
</html>