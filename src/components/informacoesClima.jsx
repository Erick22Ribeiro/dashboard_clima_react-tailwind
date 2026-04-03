function InformacoesClima({dados}) {

    if (!dados) return null;

    return (

        <div>
            <p>Cidade: {dados.name}</p>
            <p>Temperatura: {dados.main.temp}°C</p>
        </div>
    )
}

export default InformacoesClima;