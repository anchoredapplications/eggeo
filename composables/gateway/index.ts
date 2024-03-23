export type GatewayFunction = () => Promise<any>;

async function gateway(func: any, route: string, body?: any) {
  const headers = useRequestHeaders(['cookie']) as HeadersInit;
  let response, error;
  try {
    response = await func(route, {
      method: 'post',
      headers: headers,
      body: body,
    });
  } catch (error: unknown) {
    error = error;
  }

  return [response, error];
}

export async function useGateway(route: string, body?: any) {
  return gateway(useFetch, route, body);
}

export async function $gateway(route: string, body: any) {
  return gateway($fetch, route, body);
}
