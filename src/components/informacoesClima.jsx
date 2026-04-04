function InformacoesClima({dados}) {

    if (!dados) return null;

    const data = new Date(dados.dt * 1000);

    const diaSemana = data.toLocaleDateString('pt-BR', {
        weekday: 'long'
    });

    const diaFormatado = diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);

    const hora = data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit'
    });

    const dataFormatada = `${diaFormatado}, ${hora}`;

    return (

        <div className="mt-8 justify-center gap-10 w-135 h-50 ounded-md bg-slate-900 rounded border border-slate-800 p-5">
            
            <div className="flex gap-1">
                <p className="text-lg">Resultados para</p>
                <p className="text-lg font-bold">{dados.name}, </p>
                <p className="text-lg font-bold">{dados.sys.country}</p>
            </div>
            
            <div className="flex items-center gap-4">

                <div className="flex items-center">
                    <img src={`https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`} alt={dados.weather[0].description} />
                    <div className="w-px h-6 bg-gray-400 mr-4"></div>
                    <p className="text-4xl">{dados.main.temp}</p>
                    <p className="text-xl">°C</p>
                </div>
                
                <div className="text-xs text-gray-500">
                    <p>Humidade: {dados.main.humidity}%</p>
                    <p>Vento: {dados.wind.speed}km/h</p>   
                </div>

                <div className="ml-auto">
                    <p>{dataFormatada}</p>
                    <p>{dados.weather[0].description.charAt(0).toUpperCase() + dados.weather[0].description.slice(1)}</p>
                </div>
                
            </div>
            
        </div>

    )
}

export default InformacoesClima;