function insertVal(value){
    document.getElementById("result").value+=value;
}
function clearVal(){
    document.getElementsById("result").value+=' ';
}
function calculate(){
    try{
        document.getElementById("result").value=eval(document.getElementById("result").value);
    }
    catch(error){
        document.getElementsById("result").value="error";

    }

}



