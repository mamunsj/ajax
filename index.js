let btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://restcountries.com/v2/all',true);
    xhr.onload = () => {
        if (xhr.status == 200) {
            console.log("success")
            let countries = JSON.parse(xhr.response)
            console.log(countries)
            countries.forEach((country)=> {
                // let countryCode = document.createElement('li')
                // countryCode.innerHTML = country.name + " - " + country.capital
                // document.getElementById('list').appendChild(countryCode)
            
                // 
                let createDiv = document.createElement('div')
                createDiv.className = 'mydiv'
                let countryName = document.createElement('h1')
                let capitalName = document.createElement('h3')
                let flag = document.createElement('img')
                flag.src = country.flag
                countryName.innerHTML = country.name
                capitalName.innerHTML = country.capital

                createDiv.appendChild(countryName)
                createDiv.appendChild(capitalName)
                createDiv.appendChild(flag)
                document.getElementById('divDefault').appendChild(createDiv)
            })
        }
    }
    xhr.send()

})