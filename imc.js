const cleanInputValues = (weightSelector, heightSelector) => {
    weightSelector.value = ''
    heightSelector.value = ''
}
class Person {
    constructor(weight, height, sex) {
        this.weight = weight
        this.height = height
        this.sex = sex
    }
    getImc() {
        const result = document.querySelector('div#result')
        if(!this.height || !this.weight) {
            alert ('Digite seu peso e altura')
            cleanInputValues(document.querySelector('#weight'), document.querySelector('#height'))
            return false
        }
        result.innerHTML = (this.weight / (this.height * this.height)).toFixed(2)
        if(result.innerHTML <= 12) {
            alert('Peso muito baixo em relação à altura, confira os dados e tente novamente')
           cleanInputValues(document.querySelector('#weight'), document.querySelector('#height'))
            result.innerHTML = ''
            return false
        }
        cleanInputValues(document.querySelector('#weight'), document.querySelector('#height'))
        return result.innerHTML
    }
    showRecomendations() {
        const result = document.querySelector('div#result').innerHTML
        const recomendations = document.querySelector('div#recomendations')
        const changeImage = document.querySelector('img')
        if(!result || result == 'NaN' ) {
            alert('Por favor, calcule primeiro o seu IMC')
        }
        else if((this.sex[0].checked && result < 20) || (this.sex[1].checked && result < 19 )) {
            recomendations.innerHTML = `Você está abaixo do peso. Ingira mais alimentos durante o dia para que haja um superávit calórico.`
            changeImage.src = 'https://images.unsplash.com/photo-1594179047519-f347310d3322?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzdCUyMGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            changeImage.style = 'width: 300px; height: 200px;'
        }
        else if((this.sex[0].checked && (result >= 20 && result <= 24.9)) || this.sex[1].checked && (result >= 19 && result <= 23.9)) {
            recomendations.innerHTML = 'Parabéns! Seu peso se encontra em condições normais.'
            changeImage.src = 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2F0aXNmaWVkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            changeImage.style = 'width: 300px; height: 200px;'
        }
        else if((this.sex[0].checked && (result >= 25 && result <= 29.9)) || this.sex[1].checked && (result >= 24 && result <= 28.9)) {
            recomendations.innerHTML = 'Você se encontra em um estado de Obesidade Leve. Mas não se preocupe, você pode reajustar seus hábitos alimentares para que haja um déficit calórico e reverter facilmente este quadro.'
            changeImage.src = 'https://images.unsplash.com/photo-1523901839036-a3030662f220?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdlaWdodCUyMHRoaW5nc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60.'
            changeImage.style = 'width: 300px; height: 200px;'
        }
        else if((this.sex[0].checked && (result >= 30 && result <= 39.9)) || this.sex[1].checked && (result >= 29 && result <= 38.9)) {
            recomendations.innerHTML = 'Você se encontra em um estado de Obesidade Moderada. Considere procurar um profissional de nutrição, pois a obesidade pode causar sérios problemas de saúde.'
            changeImage.src = 'https://images.unsplash.com/photo-1542707309-4f9de5fd1d9c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRhbmdlciUyMHBvc3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            changeImage.style = 'width: 300px; height: 200px;'
        }
        else if((this.sex[0].checked && result >= 40)  || (this.sex[1].checked && result >= 39)) {
            recomendations.innerHTML = 'Você se encontra em um estado de Obesidade Mórbida. Procure imediatamente um profissional de nutrição, pois você corre sérios riscos de desenvolver problemas de saúde'
            changeImage.src = 'https://images.unsplash.com/photo-1555699875-5773b06e8ee2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFuZ2VyJTIwc2lnbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            changeImage.style = 'width: 300px; height: 200px;'
        }

    }
    cleanScreen() {
        const selectors = [document.querySelector('div#result'), document.querySelector('div#recomendations')]
        selectors.forEach(element => element.innerHTML = '') 
        document.querySelector('img').src = ''
        changeImage.style = 'width: 0 px; height: 0 px;'
    }

}

const getWeight = () => document.querySelector('input#weight').value
const getHeight = () => document.querySelector('input#height').value
const getSex = () => document.getElementsByName('radsex')


const getImc = () => {
    const weight = getWeight()
    const height = getHeight()
    const person = new Person(weight, height)
    return person.getImc()
}

const showRecomendations = () => {
    const weight = getWeight()
    const height = getHeight()
    const sex = getSex()
    const person = new Person(weight, height, sex)
    console.log(weight)
    console.log(height)
    console.log(sex)
    return person.showRecomendations()
}

const cleanScreen = () => {
    const person = new Person()
    return person.cleanScreen()
}

