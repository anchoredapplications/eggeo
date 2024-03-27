export type GatewayFunction = () => Promise<any>;

async function gateway(func: any, route: string, body?: any, state?: any) {
  const headers = useRequestHeaders(['cookie']) as HeadersInit;
  const opts = {
    method: 'post',
    headers: headers,
    body: body ?? '',
  };
  let responseData: any, error: any, handleRefresh: (() => any) | undefined;

  try {
    var { data, refresh } = await func(route, opts);
    handleRefresh = () => {
      refresh(opts);
    };
  } catch (e: unknown) {
    error = e;
  }

  if (!error) {
    if (data.value?.status !== 'unauthenticated') {
      responseData = data;
    }

    if (state && responseData) {
      try {
        state.value = responseData.value;
      } catch (e: unknown) {
        error = e;
      }
    }
  }

  return [data, error, handleRefresh];
}

export async function useGateway(route: string, body?: any, state?: any) {
  return gateway(useFetch, route, body, state);
}

export async function $gateway(route: string, body?: any, state?: any) {
  return gateway($fetch, route, body, state);
}
