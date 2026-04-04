// Serviço para buscar dados do clima na API OpenWeatherMap

const CHAVE_API = import.meta.env.VITE_CHAVE_API;

export async function buscarClimaPorCidade(cidade) {
  if (!cidade.trim()) throw new Error('Cidade não informada');

  const resposta = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${CHAVE_API}&lang=pt_br`
  );

  if (!resposta.ok) throw new Error('Cidade não encontrada');

  return await resposta.json();
}
