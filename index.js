const billAmount=document.querySelector("#bill-amount")
const checkButton=document.querySelector("#check-button")
const cashGive=document.querySelector("#cash-given")
const message=document.querySelector("#error-message")
const noOfNotes=document.querySelectorAll(".no-Of-Notes")

let availableNotes=[2000,1000,500,200,100,50,20,10,5,1]



checkButton.addEventListener("click", function validator(){
     message.style.display="none"
    if(billAmount.value>0){
        if(cashGive.value>=billAmount.value){
            const amountToBeReturned=cashGive.value-billAmount.value
            calculateChange(amountToBeReturned)
        }else{
           
            showMessage("no money?")
        }
    }else{
        showMessage("invalid bill")
    }
})

function calculateChange(amountToBeReturned){
   
    for(let i=0;i<availableNotes.length;i++){
        
        const numberOfNotes=Math.trunc(amountToBeReturned/availableNotes[i]);
        console.log(amountToBeReturned/availableNotes[i])
        amountToBeReturned =amountToBeReturned%availableNotes[i]
     
        noOfNotes[i].innerText=numberOfNotes
    }
}




function showMessage(msg){
    message.style.display="block"
    message.innerText=msg
}