// Funciones de utilidad
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


/**
 * Formatea una fecha a un formato de fecha local como es-ES o en-US.
 * 
 * @param {string | Date} date - La fecha a convertir. Puede ser una cadena o un objeto Date.
 * @returns {string} - La fecha formateada en el formato "día de mes de año".
 */
export function formatDate( date: string) { 

  return new Date(date).toLocaleDateString('es-ES', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}