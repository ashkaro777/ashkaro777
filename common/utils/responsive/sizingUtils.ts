export const squareSizing = (size: string = "48px", variableName = "--size") =>
  ` 
    ${variableName}: ${size};
    width: var(${variableName}) !important;
    height: var(${variableName}) !important;
    min-width: var(${variableName}) !important;
    min-height: var(${variableName}) !important;
  `;
