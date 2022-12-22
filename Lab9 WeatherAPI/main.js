const API_KEY = "5786b43150323446c372fc5c6b4db5ba"



const cityList = await fetch("./city.list.json")
    .then((response)=>response.json())
    .then(loadingFinished());




    const cityInput  = document.querySelector("#citySearch");
    const suggestionsBox = document.querySelector("#suggestions");


    cityInput.addEventListener("input",(e)=>{
        let input = e.target.value;
        let suggestions = citySuggestions(input);
        generateSuggestions(suggestions)
        
    })




    function loadingFinished() {
        
    }

    async function  displayWeather(city_id){
        
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${city_id}&appid=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => data);

    return data;
    }

    function generateSuggestions(sugs){
         suggestionsBox.innerHTML = ""
        suggestionsBox.size = sugs.length;
        sugs.forEach((sug)=>{
            let paragraph = document.createElement("option");
            paragraph.id = sug.id;
            paragraph.value = sug.name;
            paragraph.innerHTML = sug.name;
            suggestionsBox.append(paragraph);
            paragraph.addEventListener("click",async (e)=>{
                
                cityInput.value = e.target.innerText;
                suggestionsBox.innerHTML = "";
                suggestionsBox.size = "0";
                const cityData = await displayWeather(e.target.id);
                console.table(cityData)

                document.querySelector("#test").innerHTML = cityData.main.temp
            })
        })

    }


    function citySuggestions(input){    
       
        return Array.from(cityList.filter(elem => elem.name.includes(input))).slice(0,10);
    }








    







