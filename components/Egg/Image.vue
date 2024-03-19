<template>
    <svg viewBox="0 -80 270 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000" stroke-width="3">
    <g transform="rotate(-90, 160, 160)">         
        <!-- Define linear gradient with modified color stops -->
        <defs>
            <linearGradient id="eggGradient" x1="0%" y1="0%" x2="100%" y2="0">
            <stop offset="0%" :stop-color="stop1Color" />
            <stop offset="30%" :stop-color="stop1Color" />
            <stop offset="35%" :stop-color="stop2Color" />
            <stop offset="60%" :stop-color="stop2Color" />
            <stop offset="70%" :stop-color="stop3Color" />
            <stop offset="100%" :stop-color="stop3Color" />
            </linearGradient>
        </defs>
        <!-- Egg with gradient fill (rotated -90 degrees) -->
        <path transform="scaleX(0.9)" d="m15 134.99c-0.0947-24.82 6.2099-50.094 20.678-70.294 16.302-22.761 41.953-37.686 68.962-45.268 36.305-10.192 75.107-8.0428 112.09-0.66784 39.009 7.7788 76.974 21.336 111.36 41.289 14.236 8.263 28.01 17.757 38.712 30.24 10.702 12.484 18.167 28.28 18.2 44.7 0.033 16.363-7.3191 32.141-17.918 44.636-10.598 12.496-24.278 22.027-38.44 30.304-34.321 20.059-72.335 33.527-111.36 41.289-36.989 7.359-75.797 9.566-112.09-0.6679-27.288-7.6944-53.135-22.931-69.515-46.004-14.236-20.053-20.584-44.993-20.678-69.558z" :fill="`url(#eggGradient)`" />
    </g>
    </svg>
  </template>
  
  <script setup>
  import { randomHexColor } from '~/utils/randomHexColor.js'; // Assuming you have a utility function to generate random hex colors
  
  // Constant offsets
  const stop1Color = randomHexColor();
  const stop2Color = randomHexColor();
  const stop3Color = randomHexColor();
  
  </script>
  