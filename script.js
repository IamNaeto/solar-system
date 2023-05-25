const body = document.querySelector('body')
body.style.fontFamily = 'Montserrat'

const header = document.querySelector('header')

const h1 = document.querySelector('h1')

const input = document.querySelector('input')

const select = document.querySelector('select')

const button = document.querySelector('button')

const main = document.querySelector('main')

const flexContainer = document.querySelector('.flex-container')
 
const flexItem = document.querySelector('.flex-item')

const planetImg = document.querySelector('.planet-image')
planetImg.style.width = '100%'



const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto', 'Moon']
const planetGravity = [3.59, 8.87, 9.81, 3.77, 25.95, 11.08, 10.67, 14.07, 0.42, 1.62]


function createPlanetsOption(){
    for(let i=0; i<planets.length; i++){
        let createOption = document.createElement('option')
        createOption.innerHTML = planets[i]
        createOption.value = `${planets[i]}`
        select.appendChild(createOption)
    }
}
createPlanetsOption()



function createDescriptionDiv(){
    let descriptionDiv = document.querySelector('.description')
    descriptionDiv.style.display = 'flex'
    descriptionDiv.style.flexDirection = 'column'
    descriptionDiv.style.alignItems = 'center'
    descriptionDiv.style.justifyContent = 'center'
    descriptionDiv.style.color = '#ffffff'
    descriptionDiv.style.fontSize = '30px'
    descriptionDiv.style.width = '100%'
    descriptionDiv.style.backgroundColor = 'rgba(255,255,255,0.1)'
    descriptionDiv.style.padding = '8px 20px 8px 20px'
    descriptionDiv.style.margin = '0'

    return descriptionDiv
}

let descriptionParagraph = document.createElement('p')
descriptionParagraph.innerHTML = 'The Weight of the object on: ';
descriptionParagraph.id = descriptionParagraph
descriptionParagraph.style.fontSize = '20px'
descriptionParagraph.textAlign = 'center'
descriptionParagraph.margin = '0px'

let planetSpan = document.createElement('span')
planetSpan.id = 'planetSpan'
descriptionParagraph.appendChild(planetSpan)

let resultDiv = document.createElement('div')
resultDiv.style.display = 'flex'
resultDiv.style.alignItems = 'center'
resultDiv.style.justifyContent = 'center'
resultDiv.style.background = 'red'
resultDiv.style.borderRadius = '100px'
resultDiv.style.width = '200px'
resultDiv.style.height = '100px'
resultDiv.innerHTML = 'Ballablu, blu, bulaba'
resultDiv.textAlign = 'center'

function calculateWeight(){
    button.addEventListener('click', () => {
        let descriptionDiv = createDescriptionDiv()
        descriptionDiv.appendChild(descriptionParagraph)
        descriptionDiv.append(resultDiv)

        let mass =  input.value
        let planetType = select.value
        let weight;
        planetSpan.innerText = `${select.value.toUpperCase()}`
        let image = document.querySelector('.image')
        if(planetType === 'none' || mass === ''){
            image.style.display = 'none'
            resultDiv.style.display = 'none'
            if(mass === ''){
                descriptionParagraph.innerText = 'Mass Is Required'
            }else{
                descriptionParagraph.innerText = 'You did not select a planet'
            }
        }
        else{
        image.style.display = 'block'
        resultDiv.style.display = 'flex'
        resultDiv.style.justifyContent = 'center'
        resultDiv.style.alignItems = 'center'
        resultDiv.style.backgroundColor = 'rgba(255,255,255,0.1)'
        resultDiv.style.borderRadius = '100px'
        resultDiv.style.width = '150px';
        resultDiv.style.height = '150px';
        resultDiv.style.fontWeight = 'bolder'
        descriptionParagraph.innerHTML = `The Weight of the object on: <b>${select.value.toUpperCase()}</b>`
        planetImg.style.width = '90%'

        
         switch(true){
            case (planetType === 'Mercury') : 
             weight = mass * planetGravity[0]
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImg.src = './img/mercury.png'
            break;
            
            case (planetType === 'Venus') : 
             weight = mass * planetGravity[1];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImg.src = './img/venus.png'
            break;
            
            case (planetType === 'Earth') : 
             weight = mass * planetGravity[2];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImg.src = './img/earth.png'
            break;

            case (planetType === 'Mars') : 
             weight = mass * planetGravity[3];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImg.src = './img/mars.png'
            break;

            case (planetType === 'Jupiter') : 
             weight = mass * planetGravity[4];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImg.src = './img/jupiter.png'
            break;

            case (planetType === 'Saturn') : 
             weight = mass * planetGravity[5];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImg.src = './img/saturn.png'
            break;

            case (planetType === 'Uranus') : 
             weight = mass * planetGravity[6];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImg.src = './img/uranus.png'
            break;

            case (planetType === 'Neptune') : 
             weight = mass * planetGravity[7];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImg.src = './img/neptune.png'
            break;

            case (planetType === 'Pluto') : 
             weight = mass * planetGravity[8];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImg.src = './img/pluto.png'
            break;

            case (planetType === 'Moon') : 
             weight = mass * planetGravity[9];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImg.src = './img/moon.png'
            break;
    
            default:
            weight = 'Something is Wrong somewhere'
            console.log('There must be a problem to get here');
            resultDiv.innerText = weight;
        }

        }
    })
}
calculateWeight()