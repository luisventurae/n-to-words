/******************************************************
 *_____________________________________________________
 *
 * Autor       :  luisventurae
 * ____________________________________________________
 * 
 * Este paquete es una herramienta útil para convertir 
 * números a su representación textual. Ideal para 
 * aplicaciones que requieren formatos específicos en 
 * documentos como boletas y facturas.
 * Version mejorada
 ******************************************************/

import MONEDAS, { codesMoney } from "./monedas"
import { UNIDADES, DECENAS, DIEZ_DIEZ, CIENTOS } from "./unidades"

const max_supported = 999999999 as const

const leerDecenas = (numero: number): string => {
  if (numero < 10) return UNIDADES[numero]
  let [decena, unidad] = [Math.floor(numero / 10), numero % 10]
  if (numero < 20) return DECENAS[unidad]
  if (numero < 30) return unidad === 0 ? "veinte" : `veinti${UNIDADES[unidad]}`
  let resultado = DIEZ_DIEZ[decena]
  if (unidad > 0) resultado += ` y ${UNIDADES[unidad]}`
  return resultado
}

const leerCentenas = (numero: number): string => {
  let [centena, resto] = [Math.floor(numero / 100), numero % 100]
  if (resto === 0) return CIENTOS[centena]
  return `${CIENTOS[centena]} ${leerDecenas(resto)}`
}

const leerMiles = (numero: number): string => {
  let [millar, resto] = [Math.floor(numero / 1000), numero % 1000]
  let resultado = ""

  if (millar === 1) {
    resultado = "mil"  // 🔥 Si es solo 1000, no agregamos "un"
  } else if (millar < 100) {
    resultado = `${leerDecenas(millar)} mil`
  } else {
    resultado = `${leerCentenas(millar)} mil`  // 🔥 Manejo correcto de centenas
  }

  if (resto > 0) {
    resultado += ` ${resto < 100 ? leerDecenas(resto) : leerCentenas(resto)}`
  }

  return resultado
}

const leerMillones = (numero: number): string => {
  let [millon, resto] = [Math.floor(numero / 1000000), numero % 1000000]
  let resultado = ""

  if (millon === 1) {
    resultado = "un millón"
  } else if (millon < 100) {
    resultado = `${leerDecenas(millon)} millones`
  } else {
    resultado = `${leerCentenas(millon)} millones`  // 🔥 Se usa leerCentenas para manejar cientos de millones
  }

  if (resto > 0) resultado += ` ${leerMiles(resto)}`
  return resultado
}

// const leerMillardos = (numero: number) => {
//   let [millardo, millon] = [Math.floor(numero / 1000000)]
// }

const numeroALetras = (numero: number): string => {
  if (numero > max_supported) throw new RangeError(`Número fuera de rango: ${numero} (máximum supported: ${max_supported})`)

  let entero = Math.floor(numero)
  if (entero < 100) return leerDecenas(entero)
  if (entero < 1000) return leerCentenas(entero)
  if (entero < 1000000) return leerMiles(entero)
  return leerMillones(entero)
}

const convertirNumeroLetras = (numero: number, codigoMoneda: codesMoney): string => {
  if (numero > max_supported) throw new RangeError(`Número fuera de rango: ${numero} (máximum supported: ${max_supported})`)

  const moneda = MONEDAS[codigoMoneda]
  if (!moneda) throw new Error(`Código de moneda inválido: ${codigoMoneda}`)

  const entero = Math.floor(numero)
  const decimal = Math.round((numero - entero) * 100)

  // 🛠️ Manejo especial cuando el número es menor que 1
  if (entero === 0 && decimal > 0) {
    return `${numeroALetras(decimal).toUpperCase()} ${moneda.centimos_plural.toUpperCase()}`
  }

  const letrasEntero = numeroALetras(entero).toUpperCase()
  const monedaNombre =
    entero === 1 ? moneda.singular.toUpperCase() : moneda.plural.toUpperCase()
  const letrasDecimal =
    decimal > 0
      ? `Y ${decimal.toString().padStart(2, "0")}/100 ${moneda.centimos_plural.toUpperCase()}`
      : "Y 00/100 CÉNTIMOS"

  return `${letrasEntero} ${monedaNombre} ${letrasDecimal}`
}

const getTest = (): void => {
  return console.log("test number to letters library 🚀")
}

export default { getTest, convertirNumeroLetras, numeroALetras }
