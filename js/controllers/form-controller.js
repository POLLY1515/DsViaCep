
//O controlador trata iteraçoes do usuario
import Address from '../models/address.js'
import * as addressService from "../services/address-service.js";


function State(){

    this.address = new Address();

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
    state.btnClear.addEventListener('click', handleBtnClearClick)
    state.btnSave.addEventListener('click', handleBtnSaveClick);
    state.inputCep.addEventListener('change',handleInputCepChange);

    

}//fim init

    async function handleInputCepChange(event){
        const cep = event.target.value;

        try{
            const address = await addressService.findByCep(cep);

            state.inputStreet.value = address.street;
            state.inputCity.value = address.city;
            state.address = address;
    
            setFormError("cep","");
            state.inputNumber.focus();
        }
        catch(e){
            state.inputStreet.value = "";
            state.inputCity.value = "";
            setFormError("cep","Informe um cep válido")
        }
        
      

    }
    

    async function handleBtnSaveClick(event){
        event.preventDefault();
        console.log(event.target)
    }

       

    function handleInputNumberChange(event){
        if(event.target.value == ""){
        setFormError("number","campo requerido");
    }else{
        setFormError("number","");

    }
    }//fim funcao  handleInputNumberChange

    function handleBtnClearClick(event){
        event.preventDefault();//para barrar o evio do formulario
        clearForm();
    }

     //funcao para limpar o formulario
     function clearForm(){
        state.inputCep.value = "";
        state.inputCity.value = "";
        state.inputNumber.value = "";
        state.inputStreet.value = "";

        setFormError("cep", "");
        setFormError("number","");

        state.inputCep.focus();//o cursor sera jogado para dentro desse input

    }


    function setFormError(key,value){
        const element = document.querySelector(`[data-error="${key}"]`);
        element.innerHTML = value;
    }

