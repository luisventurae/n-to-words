/******************************************************
 *_____________________________________________________
 *
 * Autor       :  Jamesllm
 * ____________________________________________________
 * 
 * Este paquete es una herramienta útil para convertir 
 * números a su representación textual. Ideal para 
 * aplicaciones que requieren formatos específicos en 
 * documentos como boletas y facturas.
 *
 ******************************************************/
export type codesMoney = 'PEN' | 'USD' | 'EUR'

const MONEDAS = {
  PEN: {
    codigo_moneda: "PEN",
    descripcion: "Sol",
    mn_short_dsc: "S/.",
    singular: "sol",
    plural: "soles",
    centimos_singular: "céntimo",
    centimos_plural: "céntimos",
  },
  USD: {
    codigo_moneda: "USD",
    descripcion: "US Dollar",
    mn_short_dsc: "$",
    singular: "dólar americano",
    plural: "dólares americanos",
    centimos_singular: "centavo",
    centimos_plural: "centavos",
  },
  EUR: {
    codigo_moneda: "EUR",
    descripcion: "Euro",
    mn_short_dsc: "€",
    singular: "euro",
    plural: "euros",
    centimos_singular: "céntimo",
    centimos_plural: "céntimos",
  },
}

export default MONEDAS