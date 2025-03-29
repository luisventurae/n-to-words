# Number to letters

**Convierte números a texto en formato simple o para boletas y facturas electrónicas**

Este paquete es una herramienta útil para convertir números a su representación textual. Ideal para aplicaciones que requieren formatos específicos en documentos como boletas y facturas. 


## Funciones Disponibles
1. `numeroALetras()`

    Convierte un número a letras en su forma básica.

    **Ejemplo de Uso:**

    ```js
    import ntw from "n-to-words";

    console.log(ntw.numeroALetras(120.0));  // Salida: ciento veinte  
    ```

1. `convertirNumeroLetras()`

    Convierte un número a letras con el formato requerido para boletas o facturas electrónicas. Esta función permite especificar el tipo de moneda mediante un código.


    **Ejemplo de Uso:**

    ```js
    import ntw from "n-to-words";
    
    console.log(ntw.convertirNumeroLetras(12000,'PEN'));  // Salida: DOCE MIL SOLES Y 00/100 CÉNTIMOS
    console.log(ntw.convertirNumeroLetras(652, "USD"));  // Salida: SEISCIENTOS CINCUENTA Y DOS DÓLARES AMERICANOS Y 00/100 CÉNTIMOS
    console.log(ntw.convertirNumeroLetras(10000,'EUR'));  // Salida: DIEZ MIL EUROS Y 00/100 CÉNTIMOS
    ```
    
## Códigos de Moneda Disponibles

| Codigo  | Moneda  |
|---------|---------|
| PEN | Sol Peruano  |
| USD | Dolar Americano  |
| EUR | Euro  |

## Instalación

Agrega el paquete a tu proyecto usando npm:

```bash
npm i n-to-words
```


## Notas
- Compatible con typescript.
- Asegúrate de usar el código de moneda correcto para evitar errores en el formato de salida.
- Este paquete es compatible con Node.js y es ideal para integrarlo en sistemas de facturación o gestión administrativa.
- Soporte máximo actual `999999999`.

### Referencias
- [moneda-a-texto](https://www.npmjs.com/package/moneda-a-texto)