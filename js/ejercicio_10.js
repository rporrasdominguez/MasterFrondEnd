//Slot Machine
//El objetivo de este ejercicio es crear una máquina tragaperras utilizando
//clases donde cada vez que juguemos insertemos una moneda. Cada máquina
//tragaperras(instancia) tendrá un contador de monedas que automaticamente
//se irá incrementando conforme vayamos jugando
//Cuando se llame al metodo play el numero de monedas se debe incrementar de 
//forma automatica y debe generar tres booleanos aleatorios que representaran
//el estado de las tres ruletas. El usuario habrá ganado en caso de que los
//tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:
//Congratulations!!!. You won <numero de monedas> coins 
//y reiniciar las monedas almacenadas, ya que las hemos conseguido y han
//salido de la máquina
//En caso contrario mostrar el mensaje:
//'Good luck next time!!'


class SlotMachine{
    constructor(){
        this.contadorMonedas = 0;
        this.ruleta1=false;
        this.ruleta2=false;
        this.ruleta3=false;

    }

    upMoney() {
        this.contadorMonedas++;
    }

    resetMoney(){
        this.contadorMonedas=0;
    }

    booleanGenerator(){
        let resultado = Math.floor(Math.random()*2);
        console.log(resultado);
        return resultado;
    }

    checkHand(){
        if(this.ruleta1 && this.ruleta2 && this.ruleta3) return true;

        return false;
    }


    play(){
        this.upMoney();
        this.ruleta1 = this.booleanGenerator();
        this.ruleta2 = this.booleanGenerator();
        this.ruleta3 = this.booleanGenerator();

        if(this.checkHand()){
            console.log(`Congratulations!!!. You won ${this.contadorMonedas} coins`);
            this.resetMoney()
        }
        else{
            console.log('Good luck next time!!');
        }

    }
}

const machine1 = new SlotMachine();

for(let i = 0; i< 10;i++) machine1.play();