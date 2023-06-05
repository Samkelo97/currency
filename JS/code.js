let Dollar=document.getElementById('Dollar')
let Rands=document.getElementById('ZAR')
let Euro=document.getElementById('Euro')
let Pound=document.getElementById('Pounds')

Dollar.oninput=function(){
    let R=(parseFloat(Dollar.value)*19.51007);
    Rands.value=parseFloat(R.toFixed(2));

    let E=(parseFloat(Dollar.value)/0.94);
    Euro.value=parseFloat(E.toFixed(2));

    let P=(parseFloat(Dollar.value)/0.81)
    Pound.value=parseFloat(P.toFixed(2));

}
Rands.oninput=function(){
    let D=(parseFloat(Rands.value)*0.052);
    Dollar.value=parseFloat(D.toFixed(2));

    let E=(parseFloat(Rands.value)*0.048);
    Euro.value=parseFloat(E.toFixed(2));

    let P=(parseFloat(Rands.value)*0.042);
    Pound.value=parseFloat(P.toFixed(2));
}
Euro.oninput=function(){
    let D=(parseFloat(Euro.value)*1.07);
    Dollar.value=parseFloat(D.toFixed(2));

    let R=(parseFloat(Euro.value)*20.73);
    Rands.value=parseFloat(R.toFixed(2));

    let P=(parseFloat(Euro.value)/0.86);
    Pound.value=parseFloat(P.toFixed(2));
}
Pound.oninput=function(){
    let D=(parseFloat(Pound.value)*1.24);
    Dollar.value=parseFloat(D.toFixed(1));

    let E=(parseFloat(Pound.value)*1.16);
    Euro.value=parseFloat(E.toFixed(1));

    let R=(parseFloat(Pound.value)*24.04);
    Rands.value=parseFloat(P.toFixed(1));
}