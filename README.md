#console help

```
Options:

--help    Muestra ayuda [booleano]
--version  Muestra número de versión [booleano]
  -b, --base     Es la base a multiplicar [número] [requerido]
  -l, --listar   Muestra la tabla en consola  [booleano] [defecto: false]
  -h, --hasta    Limite a multiplicar base  [número] [defecto: 10]

```


#Examples:

```
    node app -b=5 -l=true -h=15

```
or

```
    node app --base=5 --listar=true --hasta=15

```