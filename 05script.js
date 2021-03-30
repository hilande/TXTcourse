document.write("写入文档的一句话")
function meet(){
var huida = prompt("这是在做什么");
alert( huida + "，你真厉害");
}
meet();

function add(a,b){
  return a+b;
}

console.log(add(20,30));
console.log(add(100,30));

function fontchange(){
    var x = document.getElementById("demo");
    x.style.fontsize = "25px";
    x.style.color = "red";
}

var film=["帕丁顿熊","神探夏洛克","小王子","怦然心动"];
console.log(film[0]);
film[0] = "哪吒";
film.push("姜子牙");
film.push("大鱼海棠");
film.pop();

var newone={book:"动物庄园",time:"12pm"};
newone.jian="值"
console.log(newone);

var music=[];
for (i=1;i<3;i++){music[i]=prompt("有哪些音乐？");}
console.log("有这些音乐：" + music);


var new2 = ["one", "two", "thr", "fou"];
new2.forEach(function(two){
console.log(two);
});

var new3= ["A", "B", "C", "D"];
for (var thr of new3) {
console.log(thr);
};

var new4= [
{A:"1",B:"2",C: "3"},
{yi: "①",er:"②",san: "③"},
{one: "Ⅰ",two:"Ⅱ",three: "Ⅲ"},
];
