var warning = document.querySelector('.warning');
var resultShow = document.querySelector('.resultShow');
let biggest;
document.querySelector('.close').addEventListener("click", function() {
    resultShow.style.display='none';
})
document.getElementById('sumbitBtn').addEventListener("click", function() {
    var first = parseInt(document.getElementById('first').value);
    var second = parseInt(document.getElementById('second').value);
    var third = parseInt(document.getElementById('third').value);
    
    if(first > 0 && second > 0 && third > 0){
        if(first > second && first > third){
            biggest = first;
        }
        else if(second > third){
            biggest = second;
        }
        else{
            biggest = third;
        }

        warning.style.display='none';
        resultShow.style.display='flex';
        document.querySelector('.resultShow p span').innerText = biggest;
    }
    else{
        warning.style.display='block';
        resultShow.style.display='none';
    }
   


});