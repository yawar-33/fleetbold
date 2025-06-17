import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function VariableToCapital(variable) {
  return variable
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}
export function FormatVariable(key, value) {
  return `<p class="mcePastedContent">
  <span style="color: rgb(117, 117, 117);">
    <span style="font-size: 16px;">
      <span style="font-family: -apple-system, 'Helvetica Neue';"></span>
      ${VariableToCapital(key)}: ${value}
    </span>
  </span>
</p>`;
}

export function getTripColor(index) {
  const colors = [
    '#3366FF', // azul
    '#FF3B30', // rojo
    '#30B566', // verde
    '#FF9500', // naranja
    '#5856D6', // púrpura
    '#5AC8FA', // azul claro
    '#FFCC00', // amarillo
    '#FF2D55', // rosado
    '#007AFF', // azul oscuro
    '#4CD964'  // verde claro
  ];
  
  return colors[index % colors.length];
}