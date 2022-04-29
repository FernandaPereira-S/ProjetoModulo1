function fase1() {

    while (escolha !==1 || escolha !==2 || escolha !=3) {
        var escolha = prompt ("Escolha uma das opções");
    
        if (escolha == 1) {
            alert ("Toad consegue vencer todos os Goombas.");
            location.assign("ToadFase2.html");     
        }
        else if (escolha == 2) {
            alert ("Infelizmente Toad tem um pulo muito baixo. Você perdeu.");
            location.assign("GameOver.html");
        }
        else if (escolha == 3) {
            alert ("Toad foge da luta e Bowser se torna o governante do Mundo Nintendo. Você perdeu.");
            location.assign("GameOver.html");
        }
        break;
    }
}

function fase2() {

    while (escolha !==1 || escolha !==2 || escolha !=3) {
        var escolha = prompt ("Escolha uma das opções");
    
        if (escolha == 1) {
            alert ("Com seu super chute, Toad manda Bowser Jr. para longe.");
            location.assign("ToadFase3.html");     
        }
        else if (escolha == 2) {
            alert ("Bowser Jr. não quer saber de papo. Você perdeu.");
            location.assign("GameOver.html");      
        }
        else if (escolha == 3) {
            alert ("Toad foge da luta e Bowser se torna o governante do Mundo Nintendo. Você perdeu.");
            location.assign("GameOver.html");     
        }
        break;
    }
}

function fase3() {

    while (escolha !==1 || escolha !==2 || escolha !=3) {
        var escolha = prompt ("Escolha uma das opções");
    
        if (escolha == 1) {
            alert ("O trono acerta Bowser que estava perto da janela, fazendo com que ele caisse para fora do castelo. Você venceu.");
            location.assign("GameWin.html"); 
        }
        else if (escolha == 2) {
            alert ("Toad mal consegue sair do chão. Você perdeu.");
            location.assign("GameOver.html");            
        }
        else if (escolha == 3) {
            alert ("Toad não consegue convecê-lo. Você perdeu.");
            location.assign("GameOver.html");     
        }
        break;
    }
}

function inicio() {
    location.assign("../index.html")
}