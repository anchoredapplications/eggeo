import type { Egg } from '~/types/egg';
import { $gateway, useGateway } from '.';
import { useState } from '#imports';

export async function $createEgg(egg: Egg) {
  return $gateway('/api/createEgg', egg);
}

export async function $hideEgg(egg: Egg) {
  return $gateway('/api/hideEgg', egg);
}

export async function $findEgg(egg: Egg) {
  return $gateway('/api/findEgg', egg);
}

export async function $getEggs(egg: Egg) {
  return useGateway('/api/getEggs', egg);
}

export async function useGetEggs() {
  return useGateway('/api/getEggs');
}

export async function useGetFoundEggs() {
  const state = useState<number>('foundEggs');
  return await useGateway('/api/getFoundEggs', null, state);
}

export async function $collectEgg(egg: Egg) {
  return $gateway('/api/collectEgg', egg);
}
