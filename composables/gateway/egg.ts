import type { Egg } from '~/types/egg';
import { $gateway, useGateway } from '.';

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
