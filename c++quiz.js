var i=0;
var audio1=document.getElementById("tumse");
var audio2=document.getElementById("welldone");
var submit =document.getElementById("submit");
var next =document.getElementById("next");
let questions=[
    {
        Q1:"question 1 hgnfyrtuvr77v86mvthm,i",
        A1:"op1",
        A2:"op2",
        A3:"op3",
        A4:"op4",
        A5:"op1"
    },
    { Q1:"question 2",
    A1:"op11",
    A2:"op22",
    A3:"op33",
    A4:"op44",
    A5:"op2"

},
    {
        Q1:"question 3",
        A1:"op111",
        A2:"op2",
        A3:"op3",
        A4:"op4",
        A5:"op4"

    },
    {
        Q1:"question 4",
        A1:"op1111",
        A2:"op2",
        A3:"op3",
        A4:"op4",
        A5:"op2"

    },
    {
        Q1:"question 5",
        A1:"op11111",
        A2:"op2",
        A3:"op3",
        A4:"op4",
        A5:"op3"

    },
    {
        Q1:"question ch",
        A1:"op11111",
        A2:"op2",
        A3:"op3",
        A4:"op4",
        A5:"op3"

    },
    {
        Q1:"question 6",
        A1:"op11111",
        A2:"op2",
        A3:"op3",
        A4:"op4",
        A5:"op3"

    },
    {
        Q1:"question 7",
        A1:"op11111",
        A2:"op2",
        A3:"op3",
        A4:"op4",
        A5:"op3"

    },
    {
        Q1:"question 8",
        A1:"op11111",
        A2:"op2",
        A3:"op3",
        A4:"op4",
        A5:"op3"

    },
    {
        Q1:"question 9",
        A1:"op11111",
        A2:"op2",
        A3:"op3",
        A4:"op4",
        A5:"op3"

    },
    {
        Q1:"question 10",
        A1:"op11111",
        A2:"op2",
        A3:"op3",
        A4:"op4",
        A5:"op3"

    }
];
var c;
var op1=document.getElementById("op1");
var op2=document.getElementById("op2");
var op3=document.getElementById("op3");
var op4=document.getElementById("op4");
var  quizs = document.getElementById("sp");
var mains = document.getElementById("mains");
function startQuiz(){
     
    var name=document.getElementById("name");

    var question=document.getElementById("q1");
   
    var ins = document.getElementById("in").value;
    
    if(ins=="")
    {
        alert("plese enter your name");
    }
    else{
name.innerHTML=ins;
    quizs.style.display="block";
    mains.style.display="none";
    question.innerHTML=questions[i].Q1;
    op1.innerHTML=questions[i].A1;
    op2.innerHTML=questions[i].A2;
    op3.innerHTML=questions[i].A3;
    op4.innerHTML=questions[i].A4;
    }
}
var a="op1";
var clr;
var rig;
var t=1;
var s=1;
function ans(id){
   
   pre1=a;
    a=id;
    var clr1=document.getElementById(pre1);
    clr=document.getElementById(a)
    clr1.style.backgroundColor="rgb(213, 244, 234)";
    clr.style.backgroundColor="rgba(0, 128, 0, 0.372)";
    
    

}
var glight;
var rlight;
var count=0;
var len=questions.length-1;
var arm =document.getElementById("arm");
function nextq()
{
    glight=document.getElementById("gl");
    rlight=document.getElementById("rl");
    rig=document.getElementById(questions[i].A5);
    if(a==questions[i].A5)
    {
        if(t==1)
        {
            count++;
            t=0;
            glight.style.display="block";
            rlight.style.display="none";
            rig.style.backgroundColor="rgba(0, 128, 0, 0.372)";
            a="op1";
            arm.play();
        }

    }
    else{
       
       
        if(t==1)
        {
            clr.style.backgroundColor="red";
            rig.style.backgroundColor="rgba(0, 128, 0, 0.372)";
            t=0;
            rlight.style.display="block";
            glight.style.display="none";
            a="op1";
            arm.play();
        }
    }
    
};
var sresult=document.getElementById("sresult");
var getrs=document.getElementById("getresult1");
var getres=document.getElementById("getresult");
var resultlight1=document.getElementById("leftlight");
var resultlight2=document.getElementById("rightlight");
function getResult(){
        quizs.style.display="none";
        sresult.style.display="block";
        getres.innerHTML=count;
        if(count<=(len/2)){
            resultlight1.style.backgroundColor="red";
            resultlight1.style.animation="lrrlight 0.5s infinite";
            resultlight2.style.backgroundColor="red";
            resultlight2.style.animation="rrrlight 0.5s infinite";
                audio1.play();
            setTimeout(stop_interval, 13000);
  function stop_interval()
  {
    audio1.pause();
  }
        }
        else{
            audio2.play();
           
            setTimeout(stop_interval, 30000);
  function stop_interval()
  {
    audio2.pause();
  }
        }
}
function resets(){
    clr.style.backgroundColor="rgb(213, 244, 234)";
    rig.style.backgroundColor="rgb(213, 244, 234)";

    glight.style.display="none";
    rlight.style.display="none";
}
function nextqustion(){
    i++;
    a="op1";
    if(i==((questions.length)-1))
    {
        next.style.display="none";
        getrs.style.display="block";
    }
    t=1;
    arm.pause();
    resets();
  
    startQuiz();
}


