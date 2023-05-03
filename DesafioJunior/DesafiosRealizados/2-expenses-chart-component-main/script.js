function alteraGrafico(){
    const valorMinimo = 0;
    const valorMaximo = 120;
    const alturaMaxima = 120;

    var amplitude = valorMaximo - valorMinimo;


    const grafico = document.querySelectorAll('.grafic');
    
    grafico.forEach((elemento)=>{
        let proporcao = elemento.getAttribute('value') / amplitude;
        let tamanhoGrafico = proporcao * alturaMaxima;
        
        elemento.style.height = `${tamanhoGrafico*2}px`

        if(elemento.getAttribute('value') >= 50){
            elemento.classList.add('js-ciano');
        }

        else{
            elemento.classList.add('js-red');
        }
    });

    
}

alteraGrafico();

function graficoHover(){
    const graficos = document.querySelectorAll('.grafic')

    function callback(evento){
        //vai adicionar a classe que mostra o valor
        
    }

    graficos.forEach((grafico) =>{
        grafico.addEventListener('mouseenter', callback);
    });

    function callbackLeave(evento){
        //vai remover a classe que mostra o valor
    }

    graficos.forEach((grafico) =>{
        grafico.addEventListener('mouseleave', callbackLeave);
    });
}

graficoHover();
/*

Os cálculos para definir o tamanho de cada "barra" em um gráfico podem variar dependendo do tipo de gráfico e das ferramentas que estão sendo usadas. No entanto, em geral, os programadores podem seguir as seguintes etapas:

1. Definir o valor máximo e mínimo que a barra pode ter em relação aos dados. Por exemplo, se os dados variam de 0 a 5000, o valor mínimo é 0 e o máximo é 5000.

2. Calcular a amplitude do valor da barra, que é a diferença entre o valor máximo e mínimo. Neste exemplo, a amplitude seria de 5000.

3. Definir a altura máxima que a barra pode ter em relação ao tamanho da área do gráfico. Por exemplo, se a área do gráfico é de 400px de altura, a altura máxima da barra seria de 400px.

4. Calcular a proporção entre o valor da barra e a amplitude total. Para isso, divide-se o valor da barra pela amplitude total. Por exemplo, se a barra tem um valor de 50, a proporção seria de 50/5000 = 0,01.

5. Multiplicar a proporção pelo tamanho da área do gráfico para obter a altura da barra. No exemplo dado, a altura da barra seria de 0,01 x 400px = 4px.

Portanto, neste exemplo, uma barra com valor de 50 teria uma altura de 4px, enquanto uma barra com valor de 5000 teria uma altura de 400px, que é a altura máxima permitida.
*/