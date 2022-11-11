document.getElementById("btn-on-off").addEventListener("click", change_everything)

function change_everything() {
  const btn = document.getElementById('btn-on-off');
  const lightText = '– Eu não tenho medo do escuro!';
  const darkText = 'A garotinha acende a vela'


  changeImage()
  if (btn.textContent === lightText) {
    btn.textContent = darkText
    document.getElementById("body-bg").style.backgroundColor = "black";
    document.getElementById("btn-on-off").style.color = "white";
    document.getElementById("btn-on-off").style.backgroundColor = "black";
    textDark()
  } else {
    btn.textContent = lightText;
    document.getElementById("btn-on-off").style.backgroundColor = "white"
    document.getElementById("btn-on-off").style.color = "black"
    document.getElementById("body-bg").style.backgroundColor = "white"
    textLight()
  }

  function changeImage() {
    var image = document.getElementById('light-on');
    var darkImage = document.getElementById("body-bg");

    if (image.src.match("./lampada/lampada-desligada.png")) {
      image.src = "./lampada/lampada-ligada.png";
      darkImage.style.backgroundImage = "url('./lampada/giphy.gif')";
    }
    else {
      image.src = "./lampada/lampada-desligada.png";
      darkImage.style.backgroundImage = "url('./lampada/imagem-movimento-sombras-1.gif')";
    }
  }

  function textDark(){
    document.getElementById('paragrafo1').textContent ="Com um sopro, a luz se foi. Todo o ambiente foi abraçado pelas trevas.";
    document.getElementById('paragrafo2').textContent ="– Oh, querida... você não deveria ter feito isso...– a avó comentou, mas sua voz agora estava arrastada e esganiçada.";
    document.getElementById('paragrafo3').textContent ="A garotinha sente sua avó refazendo suas tranças, apertando com força seus cabelos. As mãos sempre quentes e amorosas de sua avó agora estavam duras e frias, como de um cadáver. ";
    document.getElementById('paragrafo4').textContent ="– Por favor, vovó, pare! Você está me machucando!";
    document.getElementById('paragrafo5').textContent ="Mas sua vó não a responde.";
    document.getElementById('paragrafo6').textContent ="Ao olhar na direção da janela, as belas árvores não estavam mais lá. Em seu lugar, estavam árvores retorcidas e sombrias. ";
    document.getElementById('paragrafo7').textContent ="O reflexo do espelho chama a atenção da garotinha. Ela só consegue ver olhos brilhantes e sombrios onde antes estava os olhos amorosos de sua avó, que a fitavam como se pudessem devorar sua alma. Aquele ser fala:";
    document.getElementById('paragrafo8').textContent ="– Qual o problema? Eu achei que você não tinha medo do escuro.";
    document.getElementById('paragrafo9').textContent ="Um calafrio percorre o corpo da garotinha quando ela sente as mãos da criatura se aproximando de seu pescoço, nesse momento ela percebe que provavelmente cometeu um erro.";
  }

  function textLight(){
    document.getElementById('paragrafo1').textContent ="A garotinha olha ao redor com seus olhos arregalados e vê o seu reflexo no espelho, próximo a sua avó, com uma vela acesa em suas pequenas mãos.";
    document.getElementById('paragrafo2').textContent ="– O que foi, minha querida, está tudo bem? – sua avó perguntou, com doçura.";
    document.getElementById('paragrafo3').textContent ="– Eu tive um pressentimento ruim, mas não consigo me lembrar sobre o que ele era...";
    document.getElementById('paragrafo4').textContent ="– Está tudo bem, eu estou aqui com você. Olhe lá fora, está um belo dia. Ninguém pode te machucar enquanto você estiver na luz.";
    document.getElementById('paragrafo5').textContent ="A avó indica a janela, que mostravam belas árvores do lado de fora.";
    document.getElementById('paragrafo6').textContent ="– Essas tranças estão muito apertadas, deixe que eu vou arruma-las.";
    document.getElementById('paragrafo7').textContent ="A garotinha se posiciona na frente de sua avó, que começa a desfazer as tranças do seu cabelo.";
    document.getElementById('paragrafo8').textContent ="– Por que você está com essa vela na sua mão? Por acaso tem medo do escuro? – sua vó pergunta, sorrindo.";
    document.getElementById('paragrafo9').textContent ="A garotinha desce seus olhos para a vela em suas mãos, se sentindo desafiada:";
  }
}
