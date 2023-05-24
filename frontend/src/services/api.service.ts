async function apiFetch(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) {
  try {
    const response: any = await fetch(
      import.meta.env.VITE_API_URL + input,
      init
    );

    if (!response.ok) {
      return response.status;
    }

    return response;
  } catch (error) {
    console.log(error);
  }
}

export { apiFetch };
