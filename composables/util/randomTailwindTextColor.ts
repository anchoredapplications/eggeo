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

export const randomTailwindTextColor = () => pastelTextColors[Math.floor(Math.random() * pastelTextColors.length)];
