export type GatewayFunction = () => Promise<any>;

async function gateway(func: any, route: string, body?: any, state?: any) {
  const headers = useRequestHeaders(['cookie']) as HeadersInit;
  let response, data, error;
  try {
    response = await func(route, {
      method: 'post',
      headers: headers,
      body: body ?? '',
    });
  } catch (error: unknown) {
    error = error;
  }

  if (!error) {
    if (response.data.value?.status === 'unauthenticated') {
      data = null;
    } else {
      data = response.data;
    }

    if (state && data) {
      try {
        state.value = data.value;
      } catch (err: unknown) {
        error = err;
      }
    }
  }

  return [data, error];
}

export async function useGateway(route: string, body?: any, state?: any) {
  return gateway(useFetch, route, body, state);
}

export async function $gateway(route: string, body?: any, state?: any) {
  return gateway($fetch, route, body, state);
}
