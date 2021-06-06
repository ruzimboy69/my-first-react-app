import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Game extends Component {
    state={
        firstNumber:parseInt(Math.random()*100),
        secondNumber:parseInt(Math.random()*100),
        operator:"*",
        isTrue:false,
        result:"",
        result1:"",
        result2:"",
        result3:"",
        result4:"",
        clickedButton:null,
        score:0,
        width:100,
        runModal:false
    }
    startGame=()=>{
        this.setState({
            isTrue:true
        })
        this.countFunction();
        this.seenResult();
        this.move();
    }

    move=()=>{
        setInterval(this.delay, 60);
    }
    delay=()=>{
       let width=this.state.width;
        if (width<=0) {
            this.state.width=0;
            this.state.runModal=true;
        }
        else {
            width--;
            this.state.width = width;
        }
        this.setState({
            width:this.state.width
        })
    }
   

    clickButton=(index)=>{
        let chooseOperator=parseInt(Math.random()*3);
        let firstNumber=parseInt(Math.random()*100);
        let secondNumber=parseInt(Math.random()*100);

        switch (chooseOperator){
            case 0:
                this.state.operator="-";
                this.state.firstNumber=firstNumber;
                this.state.secondNumber=secondNumber;
                break;
            case 1:
                this.state.operator="+";
                this.state.firstNumber=firstNumber;
                this.state.secondNumber=secondNumber;
                break;
            case 2:
                this.state.operator="*";
                this.state.firstNumber=firstNumber;
                this.state.secondNumber=secondNumber;
                break;
        }
        this.setState({
            operator:this.state.operator
        })


        switch(index){
            case 'first':this.state.clickedButton=this.state.result1;break;
            case 'second':this.state.clickedButton=this.state.result2;break;
            case 'third':this.state.clickedButton=this.state.result3;break;
            case 'fourth':this.state.clickedButton=this.state.result4;break;
        }

        if(this.state.clickedButton==this.state.result){
            this.state.score+=1;
            this.state.width+=30;
        }


        this.countFunction();
        this.seenResult();

    }


    countFunction=()=>{
        switch(this.state.operator){
            case "*":
                this.state.result=this.state.firstNumber*this.state.secondNumber;
                break;
            case "+":
                this.state.result=this.state.firstNumber+this.state.secondNumber;
                break;
            case "-":
                this.state.result=this.state.firstNumber-this.state.secondNumber;
                break;
        }
    }
    seenResult=()=>{
        let randomNumber=parseInt(Math.random()*4);
        switch (randomNumber){
            case 0:
                this.state.result1=this.state.result;
                this.state.result2=this.state.result+34;
                this.state.result3=this.state.result-12;
                this.state.result4=this.state.result+6;
                break;
            case 1:
                this.state.result1=this.state.result-25;
                this.state.result2=this.state.result;
                this.state.result3=this.state.result+78;
                this.state.result4=this.state.result-13;
                break;
            case 2:
                this.state.result1=this.state.result+93;
                this.state.result2=this.state.result-45;
                this.state.result3=this.state.result;
                this.state.result4=this.state.result-10;
                break;
            case 3:
                this.state.result1=this.state.result+10;
                this.state.result2=this.state.result+6;
                this.state.result3=this.state.result-67;
                this.state.result4=this.state.result;
        }
    };
    changeModal=()=>{
        this.setState({
            runModal:!this.state.runModal
        })
    }
    closeModal


    render() {
        const {firstNumber,secondNumber,operator,isTrue,result1,result2,result3,result4,score,width,runModal}=this.state
        return (
            <div>
                <div className={'container '}>
                    <div className={'row my-5'}>
                        <div className={'col-md-4 offset-4'}>
                            <div className={'card'}>
                                {isTrue ? <div className={'card-header d-flex justify-content-center'}>
                                    <h2>{firstNumber}</h2>
                                    <h2>{operator}</h2>
                                    <h2>{secondNumber}</h2>
                                </div>:""}
                                { isTrue?<div className={'card-body offset-1'}>
                                <div className={'mb-3'}>
                                    <button onClick={()=>this.clickButton('first')}  className={'btn btn-info p-4 mr-3'}>{result1}</button>
                                    <button onClick={()=>this.clickButton('second')} className={'btn btn-info p-4 ml-3'}>{result2}</button>
                                </div>
                                <div>
                                    <button onClick={()=>this.clickButton('third')}   className={'btn btn-info p-4 mr-3'}>{result3}</button>
                                    <button onClick={()=>this.clickButton('fourth')}   className={'btn btn-info p-4 ml-3'}>{result4}</button>
                                </div>
                            </div>:""}
                                {isTrue? <div className={'card-footer'}>
                                    <h1>Your score:{score}</h1>
                                    <div className={'progress'}>
                                        <div className={'progress-bar'}  style={{width:(width)+"%"}}></div>
                                    </div>
                                </div>:<h1 className={'text-center'}>Your score is 0</h1>}

                            </div>
                            <button onClick={this.startGame} className={'btn btn-success btn-block my-4'}>Start the game</button>
                        </div>
                        <div className={'col-md-4 offset-4'}>
                            <Modal isOpen={runModal} toggle={this.changeModal} >
                                <ModalHeader className={'pl-5 bg-dark text-white'} toggle={this.changeModal}><h1 className={'ml-5'}>Your result is:{score}</h1></ModalHeader>
                                <ModalBody>
                                    {this.state.score>10 ?<div>
                                        <p className={'font-weight-bold ml-5'}>Sizning hisoblash tezligingiz juda yaxshi</p>
                                        <img src={'images/pleased.png'} className={'offset-2'}/>
                                    </div> :
                                        <div>
                                            <p className={'font-weight-bold'}>Sizning hisoblash tezligingiz qoniqarsiz ko'proq shug'ullaning</p>
                                            <img src={'images/sad.jpg'} className={'img-fluid offset-3'} />
                                        </div>
                                    }
                                </ModalBody>
                                <ModalFooter>
                                    <button  className={'btn btn-success btn-block'}>Play again</button>
                                </ModalFooter>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;