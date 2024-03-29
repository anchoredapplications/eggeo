import type { Egg } from '~/types/egg';
import { $gateway, useGateway } from '.';
import { useState } from '#imports';

// Asynchronous
export async function $createEgg(numberOfEggs?: number, egg?: Egg) {
  return $gateway('/api/createEgg', { count: numberOfEggs, ...egg });
}
export async function $hideEgg(egg?: Egg) {
  return $gateway('/api/hideEgg', egg);
}
export async function $findEgg(egg?: Egg) {
  return $gateway('/api/findEgg', egg);
}
export async function $collectEgg(egg?: Egg) {
  return $gateway('/api/collectEgg', egg);
}
// Synchronous
export function useGetLeaderboard(egg?: Egg) {
  return useGateway('/api/getLeaderboard');
}
export function useGetEgg(egg?: Egg) {
  return useGateway('/api/getEgg', egg);
}
export function useGetEggsNearLocation(egg?: Egg) {
  return useGateway('/api/getEggsNearLocation', egg);
}
export function useGetUserEggs(egg?: Egg) {
  return useGateway('/api/getUserEggs', egg);
}
export function useFindEgg(egg?: Egg) {
  return useGateway('/api/findEgg', egg);
}
export function useHideEgg(egg?: Egg) {
  return useGateway('/api/hideEgg', egg);
}
export function useGetFoundEggs() {
  const state = useState<number>('foundEggs');
  return useGateway('/api/getFoundEggs', null, state);
}
