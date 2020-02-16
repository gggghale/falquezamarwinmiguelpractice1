function eTypeVal(){
    var type = document.getElementById("eType");
    var choice = type.options[type.selectedIndex].value;
    if(choice==0)
    {
        alert("N0T V4L1D");
    }
}

function eTitleVal(){
if (document.getElementById("eTitle").value == "")
{
    alert("N0T V4L1D");
}
}

function eDateSVal(){
    if (document.getElementById("eDateStart").value == "")
    {
        alert("N0T V4L1D");
    }
}

function eDateEVal(){
    if (document.getElementById("eDateEnd").value == "")
    {
        alert("N0T V4L1D");
    }
}

function ePostDateVal(){
    if (document.getElementById("ePostDate").value == "")
    {
        alert("N0T V4L1D");
    }
}

function validate(){
    eTypeVal();
    eTitleVal();
    eDateSVal();
    eDateEVal();
    ePostDateVal();
}

function save(){
    validate();
}


function cancel(){

}