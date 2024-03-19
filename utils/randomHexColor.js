// Function to generate a random hex color
export function randomHexColor() {
  // Generate three random numbers between 0 and 255
  const r = 100 + Math.floor(Math.random() * 156);
  const g = 100 + Math.floor(Math.random() * 156);
  const b = 100 + Math.floor(Math.random() * 156);

  // Convert the RGB values to hexadecimal and concatenate them
  const hexColor = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

  return hexColor;
}

// Helper function to convert a number to hexadecimal
function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
