function fase1() {

    while (escolha !==1 || escolha !==2 || escolha !=3) {
        var escolha = prompt ("Escolha uma das opções");
    
        if (escolha == 1) {
            alert ("Mario pula na cabeça de cada um dos Goombas e achata eles, ganhando a disputa.");
            location.assign("MarioFase2.html");     
        }
        else if (escolha == 2) {
            alert ("Mario erra o soco e leva uma mordida. Você perdeu.");
            location.assign("GameOver.html");      
        }
        else if (escolha == 3) {
            alert ("Mario foge da luta e Bowser se torna o governante do Mundo Nintendo. Você perdeu.");
            location.assign("GameOver.html");     
        }
        break;
    }
}

function fase2() {

    while (escolha !==1 || escolha !==2 || escolha !=3) {
        var escolha = prompt ("Escolha uma das opções");
    
        if (escolha == 1) {
            alert ("Por sorte, esse é o sabor preferido de Bowser Jr, e ele não consegue resistir.");
            location.assign("MarioFase3.html");     
        }
        else if (escolha == 2) {
            alert ("Bowser Jr. é muito forte e mal sente o golpe. Você perdeu.");
            location.assign("GameOver.html");      
        }
        else if (escolha == 3) {
            alert ("Mario foge da luta e Bowser se torna o governante do Mundo Nintendo. Você perdeu.");
            location.assign("GameOver.html");     
        }
        break;
    }
}

function fase3() {

    while (escolha !==1 || escolha !==2 || escolha !=3) {
        var escolha = prompt ("Escolha uma das opções");
    
        if (escolha == 1) {
            alert ("Mario sobe até a torre e tenta pular em cima de Bowser, mas acaba quebrando a perna com seu casco duro. Você perdeu.");
            location.assign("GameOver.html"); 
        }
        else if (escolha == 2) {
            alert ("Mario aponta o canhão coincidentemente próximo para a torre, e a derruba junto de Bowser. Você venceu.");
            location.assign("GameWin.html");            
        }
        else if (escolha == 3) {
            alert ("Mario dá um soco em Bowser e ele revida, fazendo Mario desmaiar. Você perdeu.");
            location.assign("GameOver.html");     
        }
        break;
    }
}

function inicio() {
    location.assign("../index.html")
}