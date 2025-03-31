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
    codigo_moneda: "PEN" as const,
    descripcion: "Sol" as const,
    mn_short_dsc: "S/." as const,
    singular: "sol" as const,
    plural: "soles" as const,
    centimos_singular: "céntimo" as const,
    centimos_plural: "céntimos" as const,
  },
  USD: {
    codigo_moneda: "USD" as const,
    descripcion: "US Dollar" as const,
    mn_short_dsc: "$" as const,
    singular: "dólar americano" as const,
    plural: "dólares americanos" as const,
    centimos_singular: "centavo" as const,
    centimos_plural: "centavos" as const,
  },
  EUR: {
    codigo_moneda: "EUR" as const,
    descripcion: "Euro" as const,
    mn_short_dsc: "€" as const,
    singular: "euro" as const,
    plural: "euros" as const,
    centimos_singular: "céntimo" as const,
    centimos_plural: "céntimos" as const,
  },
}

export default MONEDAS