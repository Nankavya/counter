var element=document.getElementById('count')
var counterval=element.innerText
var dbtn=document.getElementById('Dbtn')
var ibtn=document.getElementById('Ibtn')
var cbtn=document.getElementById('Cbtn')
var msg=document.getElementById('alert-msg')
var para=document.getElementsByTagName('p')[0]
var background=document.getElementsByTagName('body')[0]

document.body.style.backgroundColor="black"
document.body.style.color="white"
// document.dbtn.backgroundColor="white"
// document.ibtn.backgroundColor="white"

function action()
{
    msg.innerText=' '
    counterval++
    console.log(counterval)
    element.innerText=counterval
}
function react()
{
    if(counterval <= '0')
    {
     msg.style.color="red"
        msg.innerText='Error : Cannot go below 0'
    }
    else
    {
   counterval--
    console.log(counterval)
    element.innerText=counterval
    }
}

function clear()
{ 
    msg.innerText=' '
    // console.log('0')
    element.innerText=0
    counterval=0
}
ibtn.onclick=action;
dbtn.onclick=react;
cbtn.onclick=clear;