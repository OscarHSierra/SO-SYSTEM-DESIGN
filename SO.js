var sistemas=[];
sistemas["subamortiguado"]="sub.png";
sistemas["sobreamortiguado"]="sobre.png";
sistemas["critamortiguado"]="crit.png";
sistemas["sinamortiguado"]="sin.png";

class sistemas_so
{
    constructor(nombre)
    {
        this.nombre=nombre;
        this.imagen=new Image();
        this.imagen.src=sistemas[this.nombre]
    }
}
var os= document.getElementById("input_os");
var ts= document.getElementById("input_ts");
var sel=document.getElementById("selector");
var k=document.getElementById("input_k");

var boton=document.getElementById("boton");
var controlador_js=document.getElementById("controlador");

var b0=0.0;
var r=document.getElementById("resultado");
var im=document.getElementById("imagen_res");
var wc=0.0;
var w=0.0;
var ro=0.0;
var tipo
var w2=0.0;
var s2=0.0;
var s=0.0;
var a=0.0;
var num=0.0;

function calcular(){

    os.value=parseFloat(os.value);
    ts.value=parseFloat(ts.value);
    k.value=parseFloat(k.value);
    b0=Math.log((os.value)/(100));
    ro=(-b0)/(Math.sqrt((Math.PI*Math.PI+b0*b0)))

    if (ts.value > 0 && os.value>0)
    {
        console.log(os.value);


        if (sel.value=="Ts2")
        {
            w=(4/(ro*ts.value));

        }
        else if (sel.value=="Ts5")
        {
            w=(3/(ro*ts.value));
        }
        else
        {
            tipo="error determinando el tipo de sistema";
        }

        w2=w*w;
        num=w2*k.value;
        s=2*w*ro;
        r.innerHTML="El diseño calculado es: "+"<br/>"+"ro= "+ ro.toFixed(2) +"  w= "+ w.toFixed(2) + "<br/>"+"Con polos en "+ "s= "+ (-ro*w).toFixed(2) + " ± " +(w*Math.sqrt(1- ro*ro)).toFixed(2) +" j "  ; 
        im.innerHTML="La funcion de transferencia diseñada es: "+"<br/>"+"<br/>"+num.toFixed(2)  +"<br/>"+"G(s)=   ------------------------------------------"+"<br/>"+"                                    "+ "s^2 + "+ s.toFixed(2) +" s + "+ w2.toFixed(2)
    

    }
    else
    {   
        r.innerHTML="Error de parametros";
    }

}


boton.addEventListener("click",calcular);