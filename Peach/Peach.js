function fase1() {
    while (escolha !==1 || escolha !==2 || escolha !=3) {
        var escolha = prompt ("Escolha uma das opções");
    
        if (escolha == 1) {
            alert ("Usando seu guarda-chuva, a princesa sai flutuando e deixa os Goombas para trás.");
            location.assign("PeachFase2.html");     
        }
        else if (escolha == 2) {
            alert ("São Goombas demais para dar conta. Você perdeu.");
            location.assign("../WinOver/GameOver.html");      
        }
        else if (escolha == 3) {
            alert ("Peach foge da luta e Bowser se torna o governante do Mundo Nintendo. Você perdeu.");
            location.assign("../WinOver/GameOver.html");     
        }
        break;
    }
}

function fase2() {
    while (escolha !==1 || escolha !==2 || escolha !=3) {
        var escolha = prompt ("Escolha uma das opções");
    
        if (escolha == 1) {
            alert ("Bowser Jr. é muito forte e mal sente o golpe. Você perdeu.");
            location.assign("../WinOver/GameOver.html");     
        }
        else if (escolha == 2) {
            alert ("Princesa Peach diz para Bowser Jr. que ela lhe dará um Playstation 5 se ele a deixar passar. Ele aceita o acordo.");
            location.assign("PeachFase3.html");      
        }
        else if (escolha == 3) {
            alert ("Peach foge da luta e Bowser se torna o governante do Mundo Nintendo. Você perdeu.");
            location.assign("../WinOver/GameOver.html");     
        }
        break;
    }
}

function fase3() {
    while (escolha !==1 || escolha !==2 || escolha !=3) {
        var escolha = prompt ("Escolha uma das opções");
    
        if (escolha == 1) {
            alert ("Peach não consegue achar um isqueiro. Você perdeu.");
            location.assign("../WinOver/GameOver.html"); 
        }
        else if (escolha == 2) {
            alert ("Bowser entra no castela e tranca as portas antes de Peach alcança-lo. Você perdeu.");
            location.assign("../WinOver/GameOver.html");            
        }
        else if (escolha == 3) {
            alert ("Usando as pontas afiadas de sua coroa, a princesa consegue cortar as cordas e Bowser cai no fosso. Você venceu.");
            location.assign("../WinOver/GameWin.html");     
        }
        break;
    }
}