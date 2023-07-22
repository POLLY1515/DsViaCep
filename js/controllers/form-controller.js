import Address from '../models/address.js'

function State(){

    this.Address = new Address();

    this.btnSave = null
    this.btnClear = null

    this.inputCep = null
    this.inputStreet = null
    this.inputNumber = null
    this.inputCity = null

    this.errorCep
    this.errorNumber = null

}

const state = new State()

//Sera responsavel por iniciar o funcionamento do controlador
export function init(){
    state.inputCep = document.forms.newAddress.cep//pegando o campo pelo forms
    state.inputStreet = document.forms.newAddress.street
    state.inputNumber = document.forms.newAddress.number
    state.inputCity = document.forms.newAddress.city


    state.btnSave = document.forms.newAddress.btnSave
    state.btnClear = document.forms.newAddress.btnClear

    state.errorCep = document.querySelector('[data-error="cep"]')
    state.errorNumber = document.querySelector('[data-error="numnber"]')

    state.inputNumber.addEventListener('change', handleInputNumberChange)

}//fim init

    

    function handleInputNumberChange(event){
        if(event.target.value == ""){
        setFormError("number","campo requerido");
    }else{
        setFormError("number","");

    }
    }//fim funcao  handleInputNumberChange
    


    function setFormError(key,value){
        const element = document.querySelector(`[data-error="${key}"]`);
        element.innerHTML = value;
    }

