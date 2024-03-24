const pastelTextColors = [
  'text-pink-400',
  'text-purple-400',
  'text-blue-400',
  'text-cyan-400',
  'text-green-400',
  'text-lime-400',
  'text-yellow-400',
  'text-orange-400',
  'text-red-400',
];
const pastelBackgroundColors = [
  'bg-pink-400',
  'bg-purple-400',
  'bg-blue-400',
  'bg-cyan-400',
  'bg-green-400',
  'bg-lime-400',
  'bg-yellow-400',
  'bg-orange-400',
  'bg-red-400',
];

export const randomTailwindTextColor = () => pastelTextColors[Math.floor(Math.random() * pastelTextColors.length)];
export const randomTailwindBackgroundColor = () =>
  pastelBackgroundColors[Math.floor(Math.random() * pastelBackgroundColors.length)];
