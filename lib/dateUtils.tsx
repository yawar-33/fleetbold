// lib/dateUtils.js
export function formatDateTime(date:any) {
  // Si es timestamp en segundos (Unix timestamp), convertir a Date
  if (typeof date === 'number') {
    date = new Date(date * 1000);
  } else if (typeof date === 'string' && !isNaN(Number(date))) {
    // Si es string pero representa un número (timestamp)
    date = new Date(Number(date) * 1000);
  } else if (typeof date === 'string') {
    // Si es string en formato ISO o similar
    date = new Date(date);
  }

  // Verificar si es una fecha válida
  if (!(date instanceof Date) || isNaN(date)) {
    return 'Fecha inválida';
  }

  // Formatear la fecha
  const options = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  
  return date.toLocaleDateString('es-ES', options);
}

// Función auxiliar para formatear timestamp de Unix a formato legible
export function formatTimestampFromUnix(unixTimestamp) {
  if (!unixTimestamp) return 'N/A';
  
  const date = new Date(unixTimestamp * 1000);
  return formatDateTime(date);
}