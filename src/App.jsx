import { useState } from 'react'
import './App.css'

function App() {
  
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)

  const API_KEY = '30631c4231f1f21602dfc3849a786c7d' /* adicionar em uma .env depois */

  const handleSearch = async () => {

    //Se não digitou nada, não faz nada
    if (!city.trim()) return 

    setLoading(true)

    try{
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=pt_br`)

      if (!response.ok) throw new Error('Cidade não encontrada')

        const dados = await response.json()

        setWeatherData(dados)
      }

    catch(err){
      alert(err.message)
      setWeatherData(null)
    }
    finally{
      setLoading(false)
    }
  }

  return (

    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center p-10">
      <h1 className="text-2xl font-bold mb-6">Previsão do Tempo</h1>
      
      {/* Container de Busca */}
      <div className="flex gap-2 w-full max-w-md">
        <input 
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Ex: São Paulo"
          className="flex-1 px-4 py-2 rounded-md bg-slate-800 border border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <button 
          onClick={handleSearch}
          disabled={loading}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors disabled:opacity-50"
        >
          {loading ? 'Buscando...' : 'Pesquisar'}
        </button>
      </div>

      {/* Debug Visual: Só para ver se os dados estão chegando */}
      {weatherData && (
        <pre className="mt-10 p-4 bg-slate-900 rounded border border-slate-800 text-xs overflow-auto max-w-full">
          {JSON.stringify(weatherData, null, 2)}
        </pre>
      )}
    </div>

  )

}

export default App
