import { useState } from 'react'
import './App.css'
import { buscarClimaPorCidade } from './services/climaService'
import InformacoesClima from './components/informacoesClima'

function App() {
  
  const [cidade, setCidade] = useState('')
  const [dadosClima, setDadosClima] = useState(null)
  const [carregando, setCarregando] = useState(false)

  const buscarClima = async () => {
    if (!cidade.trim()) return;
    setCarregando(true);
    try {
      const dados = await buscarClimaPorCidade(cidade);
      setDadosClima(dados);
    } catch (erro) {
      alert(erro.message);
      setDadosClima(null);
    } finally {
      setCarregando(false);
    }
  }

  return (

    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center p-10">
      <h1 className="text-2xl font-bold mb-6">Previsão do Tempo</h1>
      
      {/* Container de Busca */}
      <div className="flex gap-2 w-full max-w-md">

        <input 
          type="text"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          placeholder="Ex: São Paulo"
          className="flex-1 px-4 py-2 rounded-md bg-slate-800 border border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <button 
          onClick={buscarClima}
          disabled={carregando}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors disabled:opacity-50"
        >
          {carregando ? 'Buscando...' : 'Pesquisar'}
        </button>

      </div>

      {/* Debug Visual: Só para ver se os dados estão chegando */}
      {/* {dadosClima && (
        <pre className="mt-10 p-4 bg-slate-900 rounded border border-slate-800 text-xs overflow-auto max-w-full">
          {JSON.stringify(dadosClima, null, 2)}
        </pre>
      )} */}

      <InformacoesClima dados={dadosClima} />

    </div>

  )

}

export default App
