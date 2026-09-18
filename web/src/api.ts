const CHAVE_TOKEN = "rf_token";

export function getToken(): string | null {
  return localStorage.getItem(CHAVE_TOKEN);
}

export function setToken(token: string | null): void {
  if (token) localStorage.setItem(CHAVE_TOKEN, token);
  else localStorage.removeItem(CHAVE_TOKEN);
}

export class ErroApi extends Error {
  constructor(
    public status: number,
    public erros: string[],
  ) {
    super(erros.join("; "));
  }
}

export async function api<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = getToken();
  const resposta = await fetch(`/api${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  if (!resposta.ok) {
    const corpo = await resposta.json().catch(() => ({}));
    throw new ErroApi(resposta.status, corpo.erros ?? [corpo.erro ?? "Erro desconhecido"]);
  }

  if (resposta.status === 204) return undefined as T;
  return resposta.json();
}
