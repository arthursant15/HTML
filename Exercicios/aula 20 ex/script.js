    let num = document.getElementById('fnum')
    let lista = document.getElementById('flista')
    let resp = document.getElementById('res')
    let valores = [] 

    function isNumero(n){
        if(Number(n) >=1 && Number(n) <=100){
            return true
        }else{
            return false
        }
    }

    function inLista(n, l){
        if (l.indexOf(Number(n)) !=- 1){
            return true
        }else{
            return false
        }
    }

    function adicionar(){
        if(isNumero(num.value) && !inLista(num.value, valores)){
            valores.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `O valor ${num.value} foi adicionado! `
            lista.appendChild(item)
            resp.innerHTML = ''
        }else{
            window.alert("Valor inválido ou já encontrado na lista.")
        }
        num.value =''
        num.focus()
    }
    function finalizar(){
        if(valores.length == 0){
            window.alert("Adicione valores antes de finalizar!")
        }else{
            let tot = valores.length
            let maior = valores [0]
            let menor = valores [0]
            let soma = 0
            let media = 0

            for(let pos in valores){
                soma = soma+valores[pos]
                media = soma/tot 
                if(valores[pos] > maior){
                    maior = valores [pos]
                }if(valores[pos] < menor){
                    menor = valores [pos]
                }
            }
            resp.innerHTML = ''
            resp.innerHTML += `<p>Ao todo,temos ${tot} números cadastrados. </p>`
            resp.innerHTML += `<p>O maior número apresentado foi ${maior}. </p>`
            resp.innerHTML += `<p>O menor número apresentado foi ${menor}. </p>`
            resp.innerHTML += `<p>A soma dos valores acima é: ${soma}. </p>`
            resp.innerHTML += `<p>A média dos valores acima é: ${media}. </p>`
        }
    }