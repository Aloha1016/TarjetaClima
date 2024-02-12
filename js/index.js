const btnBuscar = document.getElementById('btnBuscar')
const inputCity = document.getElementById('searchCity')

btnBuscar.addEventListener('click', () => {
    if (inputCity.value.trim().length > 0){
        console.log('@@ input value => ', inputCity.value)
        buscarCiudad(inputCity.value)
    }
})

const buscarCiudad = async (ciudad) => {
    const url = `https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=${ciudad}&language=es`;
    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': 'ffad3de38cmshfa3de6fe16c6febp1e31f4jsn368bbb94ec2f',
		    'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
	    }
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
}