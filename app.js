

let myArray = [];

$('#myForm').on('submit', (e) => {
    e.preventDefault();
});

$("#addToArray").on("click", () => {
    let number = $("#myNumber").val();

    if($('#output2').html() !== ''){
        $('#output2').html('');
      }
    
    

    if(myArray.length=== 0){
        myArray.push(number)
        $('#output').append(number)
        $("#myNumber").val("")
    }
    else{
        myArray.push("+")
        myArray.push(number)
        $('#output').append("+");
        $('#output').append(number)
        $("#myNumber").val("")
    }
    
});

$("#remove").on("click", () => {
    let number = $("#myNumber").val();


    if($('#output2').html() !== ''){
        $('#output2').html('');
      }
    

    if(myArray.length=== 0){
        myArray.push(number)
        $('#output').append(number)
        $("#myNumber").val("")
    }
    else{
        myArray.push("-")
        myArray.push(number)
        $('#output').append("-");
        $('#output').append(number)
        $("#myNumber").val("")
    }
});




$("#result").on("click", () => {

    let toStringNumber = "";
    function toString() {
    myArray.forEach((element) => {
    toStringNumber += element;
  })
}
toString()

    let calculate = eval(toStringNumber);
    $("#output").html("");
    $("#output2").html(calculate);
    myArray = []
});







