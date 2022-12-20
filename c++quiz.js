var i=0;
var audio1=document.getElementById("tumse");
var audio2=document.getElementById("welldone");
var submit =document.getElementById("submit");
var next =document.getElementById("next");
let questions=[
    {
        Q1:"1. Which of the following user-defined header file extension used in c++?",
        A1:"a) hg",
        A2:"b) cpp",
        A3:"c) h",
        A4:"d) hf",
        A5:"op3"
    },
    { Q1:"2. Which of the following is a correct identifier in C++?",
    A1:"a) VAR_1234",
    A2:"b) $var_name",
    A3:"c) 7VARNAME",
    A4:"d) 7var_name",
    A5:"op1"

},
    {
        Q1:"3. Which of the following is not a type of Constructor in C++?",
        A1:"a) parameterized constructor",
        A2:"a) Default constructor",
        A3:"c) Copy constructor",
        A4:"d) Friend constructor",
        A5:"op4"

    },
    {
        Q1:"4. Which of the following approach is used by C++?",
        A1:"a) Left-right",
        A2:"b) Right-left",
        A3:"c) Bottom-up",
        A4:"d) Top-down",
        A5:"op3"

    },
    {
        Q1:"5. What is virtual inheritance in C++?",
        A1:"a) C++ technique to enhance multiple inheritance",
        A2:"b) C++ technique to ensure that a private member of the base class can be accessed somehow",
        A3:"c) C++ technique to avoid multiple inheritances of classes",
        A4:"d) C++ technique to avoid multiple copies of the base class into children/derived class",
        A5:"op4"

    },
    {
        Q1:"6. Which of the following type is provided by C++ but not C?",
        A1:"a) double",
        A2:"b) float",
        A3:"c) int",
        A4:"d) bool",
        A5:"op4"

    },
    {
        Q1:"7. By default, all the files in C++ are opened in _________ mode.",
        A1:"a) Binary",
        A2:"b) VTC",
        A3:"c) Text",
        A4:"d) ISCII",
        A5:"op3"

    },
    {
        Q1:"8. Which of the following correctly declares an array in C++?",
        A1:"a) array{10};",
        A2:"b) array array[10];",
        A3:"c) int array;",
        A4:"d) int array[10];",
        A5:"op4"

    },
    {
        Q1:"9. What is the use of the indentation in c++?",
        A1:"a) r distinguishes between comments and inner data",
        A2:"b) distinguishes between comments and outer data",
        A3:"oc) distinguishes between comments and code",
        A4:"d) r distinguishes between comments and outer data",
        A5:"op3"

    },
    {
        Q1:"10. Which is more effective while calling the C++ functions?",
        A1:"a) call by object",
        A2:"b) call by pointer",
        A3:"c) call by value",
        A4:"d) call by reference",
        A5:"op4"

    },
    {
        Q1:"11. Which keyword is used to define the macros in c++?",
        A1:"a) #macro",
        A2:"b) #define",
        A3:"c) macro",
        A4:"d) define",
        A5:"op2"

    },
    {
        Q1:"12. The C++ code which causes abnormal termination/behaviour of a program should be written under _________ block.",
        A1:"a) catch",
        A2:"b) throw",
        A3:"c) try",
        A4:"d) finally",
        A5:"op3"

    },
    {
        Q1:"13. Which of the following symbol is used to declare the preprocessor directives in C++?",
        A1:"a) $",
        A2:"b) ^",
        A3:"c) #",
        A4:"d) *",
        A5:"op3"

    },
    {
        Q1:"14. What is meant by a polymorphism in C++?",
        A1:"a) class having only single form",
        A2:"b) class having four forms",
        A3:"c) class having many forms",
        A4:"d) class having two forms",
        A5:"op3"

    },
    {
        Q1:"15. What is abstract class in C++?",
        A1:"a) Any Class in C++ is an abstract class",
        A2:"b) Class from which any class is derived",
        A3:"c) Class specifically used as a base class with atleast one virtual functions",
        A4:"d) Class specifically used as a base class with atleast one pure virtual functions",
        A5:"op4"

    },
    {
        Q1:"16. Which of the following constructors are provided by the C++ compiler if not defined in a class?",
        A1:"a) Copy constructor",
        A2:"b) Default constructor",
        A3:"c) Assignment constructor",
        A4:"d) All of the mentioned",
        A5:"op4"

    },
    {
        Q1:"17. Which concept allows you to reuse the written code in C++?",
        A1:"a) Inheritance",
        A2:"b) Polymorphism",
        A3:"c) Abstraction",
        A4:"d) Encapsulation",
        A5:"op1"

    },
    {
        Q1:"18. What is the benefit of c++ input and output over c input and output?",
        A1:"a) Both Type safety & Exception",
        A2:"b) Sequence container",
        A3:"c) Exception",
        A4:"d) Type safety",
        A5:"op4"

    },
    {
        Q1:"19. What is size of generic pointer in C++ (in 32-bit platform)?",
        A1:"a) 2",
        A2:"b) 4",
        A3:"c) 8",
        A4:"d) 0",
        A5:"op2"

    },
    {
        Q1:"20. Which of the following will not return a value?",
        A1:"a) null",
        A2:"b) void",
        A3:"c) empty",
        A4:"d) free",
        A5:"op2"

    },
    {
        Q1:"21. ______________ have the return type void.",
        A1:"a) all functions",
        A2:"b) constructors",
        A3:"c) destructors",
        A4:"d) none of the mentioned",
        A5:"op4"

    },
    {
        Q1:"22. Choose the incorrect option.",
        A1:"a) void is used when the function does not return a value",
        A2:"b) void is also used when the value of a pointer is null",
        A3:"c) void is used as the base type for pointers to objects of unknown type",
        A4:"d) void is a special fundamental type",
        A5:"op2"

    },
    {
        Q1:"23. What is a template?",
        A1:"a) A template is a formula for creating a generic class",
        A2:"b) A template is used to manipulate the class",
        A3:"c) A template is used for creating the attributes",
        A4:"d) A template is used to delete the class",
        A5:"op1"

    },
    {
        Q1:"24. How to declare a template?",
        A1:"a) tem",
        A2:"b) temp",
        A3:"c) template<>",
        A4:"d) temp()",
        A5:"op3"

    },
    {
        Q1:"25. How many types of templates are there in c++?",
        A1:"a) 1",
        A2:"b) 2",
        A3:"c) 3",
        A4:"d) 4",
        A5:"op2"

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
    arm.pause();
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


