var map = {
    "b1": "b2",
    "b2": "b1",
    "b3": "b4",
    "b4":  "b3",
    "b5": "b12",
    "b6": "b11",
    "b7": "b14",
    "b8":  "b13",
    "b9": "b10",
    "b10": "b9",
    "b11": "b6",
    "b12":  "b5",
    "b13": "b8",
    "b14": "b7",
    "b15": "b16",
    "b16":  "b15",
    "b17" : "b18",
    "b18" : "b17",
    "b19" : "b24",
    "b20" : "b21",
    "b21" : "b20",
    "b22" : "b23",
    "b23" : "b22",
    "b24" : "b19"
}
var nondupmap ={
    "b1": "b2",
    "b3": "b4",
    "b5": "b12",
    "b6": "b11",
    "b7": "b14",
    "b8":  "b13",
    "b9": "b10",
    "b15": "b16",
    "b17" : "b18",
    "b19" : "b24",
    "b20" : "b21",
    "b22" : "b23"
}

/**
* for values in map:
*  swap value i with random
*  make random : i
*/

function shuffleMap(){
    var k = Object.keys(nondupmap);
    var v = Object.values(nondupmap);
    nondupmap = {};
    faceMap = {};
    map = {};
    v = v.sort(() => Math.random() - 0.5)
    for(var i = 0; i<k.length;i++){
        var val = v[i];
        var key = k[i];
        nondupmap[key]= val;
        map[key] = val;
        map[val] = key;
        faceMap[key] = "f"+(i+1);
        faceMap[val] = "f" +(i+1);
    }
}
var faceMap ={
    "b1": "f1",
    "b2": "f1",
    "b3": "f2",
    "b4":  "f2",
    "b5": "f3",
    "b6": "f4",
    "b7": "f5",
    "b8":  "f6",
    "b9": "f7",
    "b10": "f7",
    "b11": "f4",
    "b12":  "f3",
    "b13": "f6",
    "b14": "f5",
    "b15": "f8",
    "b16":  "f8",
    "b17" : "f9",
    "b18" : "f9",
    "b19" : "f10",
    "b20" : "f11",
    "b21" : "f11",
    "b22" : "f12",
    "b23" : "f12",
    "b24" : "f10"
}

var clicked ={
    "b1": false,
    "b2": false,
    "b3": false,
    "b4":  false,
    "b5": false,
    "b6": false,
    "b7": false,
    "b8": false,
    "b9":  false,
    "b10": false,
    "b11": false,
    "b12": false,
    "b13": false,
    "b14":  false,
    "b15": false,
    "b16" : false,
    "b17":  false,
    "b18": false,
    "b19": false,
    "b20": false,
    "b21": false,
    "b22":  false,
    "b23": false,
    "b24" : false
}
var count = 0;
var correct = 0;
function getTime(id){
    var easy= document.getElementById("easy");
    var med = document.getElementById("med");
    var hard = document.getElementById("hard");

    if(easy.checked){
        return 8000;
    }else if(med.checked){
        return 5000;
    }else if(hard.checked){
        return 3000;
    }
}

function gameOver(){
    var easy= document.getElementById("easy");
    var med = document.getElementById("med");
    var hard = document.getElementById("hard");

    if(easy.checked){
        return 180000;
    }else if(med.checked){
        return 150000;
    }else if(hard.checked){
        return 120000;
    }

}
function reset(){
        document.getElementById("b1").innerHTML = '<img src ="./img/1.PNG">';
        document.getElementById("b2").innerHTML = '<img src ="./img/2.PNG">';
        document.getElementById("b3").innerHTML = '<img src ="./img/3.PNG">';
        document.getElementById("b4").innerHTML = '<img src ="./img/4.PNG">';
        document.getElementById("b5").innerHTML = '<img src ="./img/5.PNG">';
        document.getElementById("b6").innerHTML = '<img src ="./img/6.PNG">';
        document.getElementById("b7").innerHTML = '<img src ="./img/7.PNG">';
        document.getElementById("b8").innerHTML = '<img src ="./img/8.PNG">';
        document.getElementById("b9").innerHTML = '<img src ="./img/9.PNG">';
        document.getElementById("b10").innerHTML = '<img src ="./img/10.PNG">';
        document.getElementById("b11").innerHTML = '<img src ="./img/11.PNG">';
        document.getElementById("b12").innerHTML = '<img src ="./img/12.PNG">';
        document.getElementById("b13").innerHTML = '<img src ="./img/13.PNG">';
        document.getElementById("b14").innerHTML = '<img src ="./img/14.PNG">';
        document.getElementById("b15").innerHTML = '<img src ="./img/15.PNG">';
        document.getElementById("b16").innerHTML = '<img src ="./img/16.PNG">';
        document.getElementById("b17").innerHTML = '<img src ="./img/17.PNG">';
        document.getElementById("b18").innerHTML = '<img src ="./img/18.PNG">';
        document.getElementById("b19").innerHTML = '<img src ="./img/19.PNG">';
        document.getElementById("b20").innerHTML = '<img src ="./img/20.PNG">';
        document.getElementById("b21").innerHTML = '<img src ="./img/21.PNG">';
        document.getElementById("b22").innerHTML = '<img src ="./img/22.PNG">';
        document.getElementById("b23").innerHTML = '<img src ="./img/23.PNG">';
        document.getElementById("b24").innerHTML = '<img src ="./img/24.PNG">';
        alert("GAME OVER");
}
function match(id){
    //timer
    clicked[id] = true;
    if(clicked[id] && clicked[map[id]]){
        console.log(map[id] + "Map")
        alert("A MATCH");
        Object.keys(clicked).forEach(key => {clicked[key] =false;});
        count = 0;
        var easy= document.getElementById("easy");
        var med = document.getElementById("med");
        var hard = document.getElementById("hard");

        if(easy.checked && correct == 7){
          correct=0
          alert("YOU WIN");
          document.getElementById("b1").innerHTML = '<img src ="./img/1.PNG">';
          document.getElementById("b2").innerHTML = '<img src ="./img/2.PNG">';
          document.getElementById("b3").innerHTML = '<img src ="./img/3.PNG">';
          document.getElementById("b4").innerHTML = '<img src ="./img/4.PNG">';
          document.getElementById("b5").innerHTML = '<img src ="./img/5.PNG">';
          document.getElementById("b6").innerHTML = '<img src ="./img/6.PNG">';
          document.getElementById("b7").innerHTML = '<img src ="./img/7.PNG">';
          document.getElementById("b8").innerHTML = '<img src ="./img/8.PNG">';
          document.getElementById("b9").innerHTML = '<img src ="./img/9.PNG">';
          document.getElementById("b10").innerHTML = '<img src ="./img/10.PNG">';
          document.getElementById("b11").innerHTML = '<img src ="./img/11.PNG">';
          document.getElementById("b12").innerHTML = '<img src ="./img/12.PNG">';
          document.getElementById("b13").innerHTML = '<img src ="./img/13.PNG">';
          document.getElementById("b14").innerHTML = '<img src ="./img/14.PNG">';
          document.getElementById("b15").innerHTML = '<img src ="./img/15.PNG">';
          document.getElementById("b16").innerHTML = '<img src ="./img/16.PNG">';
          document.getElementById("b17").innerHTML = '<img src ="./img/17.PNG">';
          document.getElementById("b18").innerHTML = '<img src ="./img/18.PNG">';
          document.getElementById("b19").innerHTML = '<img src ="./img/19.PNG">';
          document.getElementById("b20").innerHTML = '<img src ="./img/20.PNG">';
          document.getElementById("b21").innerHTML = '<img src ="./img/21.PNG">';
          document.getElementById("b22").innerHTML = '<img src ="./img/22.PNG">';
          document.getElementById("b23").innerHTML = '<img src ="./img/23.PNG">';
          document.getElementById("b24").innerHTML = '<img src ="./img/24.PNG">';
          return;
        }else if(med.checked && correct == 9){
            correct=0;
            alert("YOU WIN")
            document.getElementById("b1").innerHTML = '<img src ="./img/1.PNG">';
            document.getElementById("b2").innerHTML = '<img src ="./img/2.PNG">';
            document.getElementById("b3").innerHTML = '<img src ="./img/3.PNG">';
            document.getElementById("b4").innerHTML = '<img src ="./img/4.PNG">';
            document.getElementById("b5").innerHTML = '<img src ="./img/5.PNG">';
            document.getElementById("b6").innerHTML = '<img src ="./img/6.PNG">';
            document.getElementById("b7").innerHTML = '<img src ="./img/7.PNG">';
            document.getElementById("b8").innerHTML = '<img src ="./img/8.PNG">';
            document.getElementById("b9").innerHTML = '<img src ="./img/9.PNG">';
            document.getElementById("b10").innerHTML = '<img src ="./img/10.PNG">';
            document.getElementById("b11").innerHTML = '<img src ="./img/11.PNG">';
            document.getElementById("b12").innerHTML = '<img src ="./img/12.PNG">';
            document.getElementById("b13").innerHTML = '<img src ="./img/13.PNG">';
            document.getElementById("b14").innerHTML = '<img src ="./img/14.PNG">';
            document.getElementById("b15").innerHTML = '<img src ="./img/15.PNG">';
            document.getElementById("b16").innerHTML = '<img src ="./img/16.PNG">';
            document.getElementById("b17").innerHTML = '<img src ="./img/17.PNG">';
            document.getElementById("b18").innerHTML = '<img src ="./img/18.PNG">';
            document.getElementById("b19").innerHTML = '<img src ="./img/19.PNG">';
            document.getElementById("b20").innerHTML = '<img src ="./img/20.PNG">';
            document.getElementById("b21").innerHTML = '<img src ="./img/21.PNG">';
            document.getElementById("b22").innerHTML = '<img src ="./img/22.PNG">';
            document.getElementById("b23").innerHTML = '<img src ="./img/23.PNG">';
            document.getElementById("b24").innerHTML = '<img src ="./img/24.PNG">';
            return;
        }else if(hard.checked && correct ==11){
            correct=0;
            alert("YOU WIN");
            document.getElementById("b1").innerHTML = '<img src ="./img/1.PNG">';
            document.getElementById("b2").innerHTML = '<img src ="./img/2.PNG">';
            document.getElementById("b3").innerHTML = '<img src ="./img/3.PNG">';
            document.getElementById("b4").innerHTML = '<img src ="./img/4.PNG">';
            document.getElementById("b5").innerHTML = '<img src ="./img/5.PNG">';
            document.getElementById("b6").innerHTML = '<img src ="./img/6.PNG">';
            document.getElementById("b7").innerHTML = '<img src ="./img/7.PNG">';
            document.getElementById("b8").innerHTML = '<img src ="./img/8.PNG">';
            document.getElementById("b9").innerHTML = '<img src ="./img/9.PNG">';
            document.getElementById("b10").innerHTML = '<img src ="./img/10.PNG">';
            document.getElementById("b11").innerHTML = '<img src ="./img/11.PNG">';
            document.getElementById("b12").innerHTML = '<img src ="./img/12.PNG">';
            document.getElementById("b13").innerHTML = '<img src ="./img/13.PNG">';
            document.getElementById("b14").innerHTML = '<img src ="./img/14.PNG">';
            document.getElementById("b15").innerHTML = '<img src ="./img/15.PNG">';
            document.getElementById("b16").innerHTML = '<img src ="./img/16.PNG">';
            document.getElementById("b17").innerHTML = '<img src ="./img/17.PNG">';
            document.getElementById("b18").innerHTML = '<img src ="./img/18.PNG">';
            document.getElementById("b19").innerHTML = '<img src ="./img/19.PNG">';
            document.getElementById("b20").innerHTML = '<img src ="./img/20.PNG">';
            document.getElementById("b21").innerHTML = '<img src ="./img/21.PNG">';
            document.getElementById("b22").innerHTML = '<img src ="./img/22.PNG">';
            document.getElementById("b23").innerHTML = '<img src ="./img/23.PNG">';
            document.getElementById("b24").innerHTML = '<img src ="./img/24.PNG">';
            return;
        }
        //set cards to display.....
        if(faceMap[id] == "f1"){
            correct++;
            document.getElementById(id).firstChild.src ="./img/faces/pose1.PNG";
            document.getElementById(map[id]).innerHTML = '<img src = "./img/faces/pose1.PNG">';
        }
        if(faceMap[id] == "f2"){
            correct++;
            document.getElementById(id).innerHTML = '<img src = "./img/faces/pose2.PNG">';
            document.getElementById(map[id]).innerHTML = '<img src = "./img/faces/pose2.PNG">';
        }
        if(faceMap[id] == "f3"){
            correct++;
            document.getElementById(id).innerHTML = '<img src = "./img/faces/pose3.PNG">';
            document.getElementById(map[id]).innerHTML = '<img src = "./img/faces/pose3.PNG">';
        }
        if(faceMap[id] == "f4"){
            correct++;
            document.getElementById(id).innerHTML = '<img src = "./img/faces/pose4.PNG">';
            document.getElementById(map[id]).innerHTML = '<img src = "./img/faces/pose4.PNG">';
        }
        if(faceMap[id] == "f5"){
            correct++;
            document.getElementById(id).innerHTML = '<img src = "./img/faces/pose5.PNG">';
            document.getElementById(map[id]).innerHTML = '<img src = "./img/faces/pose5.PNG">';
        }
        if(faceMap[id] == "f6"){
            correct++;
            document.getElementById(id).innerHTML = '<img src = "./img/faces/pose6.PNG">';
            document.getElementById(map[id]).innerHTML = '<img src = "./img/faces/pose6.PNG">';
        }
        if(faceMap[id] == "f7"){
            correct++;
            document.getElementById(id).innerHTML = '<img src = "./img/faces/pose7.PNG">';
            document.getElementById(map[id]).innerHTML = '<img src = "./img/faces/pose7.PNG">';
        }
        if(faceMap[id] == "f8"){
            correct++;
            document.getElementById(id).innerHTML = '<img src = "./img/faces/pose8.PNG">';
            document.getElementById(map[id]).innerHTML = '<img src = "./img/faces/pose8.PNG">';
        }
        if(faceMap[id] == "f9"){
          correct++;

            document.getElementById(id).innerHTML = '<img src = "./img/faces/pose9.png">';
            document.getElementById(map[od]).innerHTML = '<img src = "./img/faces/pose9.png">';
        }
        if(faceMap[id] == "f10"){
          correct++;

            document.getElementById(id).innerHTML = '<img src = "./img/faces/pose10.jpg">';
            document.getElementById(map[id]).innerHTML = '<img src = "./img/faces/pose10.jpg">';
        }
        if(faceMap[id] == "f11"){
          correct++;

            document.getElementById(id).innerHTML = '<img src = "./img/faces/pose11.PNG">';
            document.getElementById(map[id]).innerHTML = '<img src = "./img/faces/pose11.PNG">';
        }
        if(faceMap[id] == "f12"){
          correct++;

            document.getElementById(id).innerHTML = '<img src = "./img/faces/pose12.jpg">';
            document.getElementById(map[id]).innerHTML = '<img src = "./img/faces/pose12.jpg">';
        }
    }

    if(count == 2){
        console.log("WRONG");
        count = 0;
        Object.keys(clicked).forEach(key => {clicked[key] =false;});
    }
    count++;
}
function showCards(id){
    shuffleMap();
    console.log(map);
    Object.keys(clicked).forEach(key => {
        if(faceMap[key] == "f1"){
            document.getElementById(key).innerHTML = '<img src = "./img/faces/pose1.PNG">';
            document.getElementById(map[key]).innerHTML = '<img src = "./img/faces/pose1.PNG">';
        }
        if(faceMap[key] == "f2"){
            document.getElementById(key).innerHTML = '<img src = "./img/faces/pose2.PNG">';
            document.getElementById(map[key]).innerHTML = '<img src = "./img/faces/pose2.PNG">';
        }
        if(faceMap[key] == "f3"){
            document.getElementById(key).innerHTML = '<img src = "./img/faces/pose3.PNG">';
            document.getElementById(map[key]).innerHTML = '<img src = "./img/faces/pose3.PNG">';
        }
        if(faceMap[key] == "f4"){
            document.getElementById(key).innerHTML = '<img src = "./img/faces/pose4.PNG">';
            document.getElementById(map[key]).innerHTML = '<img src = "./img/faces/pose4.PNG">';
        }
        if(faceMap[key] == "f5"){
            document.getElementById(key).innerHTML = '<img src = "./img/faces/pose5.PNG">';
            document.getElementById(map[key]).innerHTML = '<img src = "./img/faces/pose5.PNG">';
        }
        if(faceMap[key] == "f6"){
            document.getElementById(key).innerHTML = '<img src = "./img/faces/pose6.PNG">';
            document.getElementById(map[key]).innerHTML = '<img src = "./img/faces/pose6.PNG">';
        }
        if(faceMap[key] == "f7"){
            document.getElementById(key).innerHTML = '<img src = "./img/faces/pose7.PNG">';
            document.getElementById(map[key]).innerHTML = '<img src = "./img/faces/pose7.PNG">';
        }
        if(faceMap[key] == "f8"){
            document.getElementById(key).innerHTML = '<img src = "./img/faces/pose8.PNG">';
            document.getElementById(map[key]).innerHTML = '<img src = "./img/faces/pose8.PNG">';
        }
        if(faceMap[key] == "f9"){
            document.getElementById(key).innerHTML = '<img src = "./img/faces/pose9.png">';
            document.getElementById(map[key]).innerHTML = '<img src = "./img/faces/pose9.png">';
        }
        if(faceMap[key] == "f10"){
            document.getElementById(key).innerHTML = '<img src = "./img/faces/pose10.jpg">';
            document.getElementById(map[key]).innerHTML = '<img src = "./img/faces/pose10.jpg">';
        }
        if(faceMap[key] == "f11"){
            document.getElementById(key).innerHTML = '<img src = "./img/faces/pose11.PNG">';
            document.getElementById(map[key]).innerHTML = '<img src = "./img/faces/pose11.PNG">';
        }
        if(faceMap[key] == "f12"){
            document.getElementById(key).innerHTML = '<img src = "./img/faces/pose12.jpg">';
            document.getElementById(map[key]).innerHTML = '<img src = "./img/faces/pose12.jpg">';
        }
    });

}
function hideCards(){
    var high = document.getElementById("hipic");
    var low = document.getElementById("lowpic");
    var med = document.getElementById("medpic");
    if(high.checked){
        document.getElementById("b1").innerHTML = '<img src ="./img/1.PNG">';
        document.getElementById("b2").innerHTML = '<img src ="./img/2.PNG">';
        document.getElementById("b3").innerHTML = '<img src ="./img/3.PNG">';
        document.getElementById("b4").innerHTML = '<img src ="./img/4.PNG">';
        document.getElementById("b5").innerHTML = '<img src ="./img/5.PNG">';
        document.getElementById("b6").innerHTML = '<img src ="./img/6.PNG">';
        document.getElementById("b7").innerHTML = '<img src ="./img/7.PNG">';
        document.getElementById("b8").innerHTML = '<img src ="./img/8.PNG">';
        document.getElementById("b9").innerHTML = '<img src ="./img/9.PNG">';
        document.getElementById("b10").innerHTML = '<img src ="./img/10.PNG">';
        document.getElementById("b11").innerHTML = '<img src ="./img/11.PNG">';
        document.getElementById("b12").innerHTML = '<img src ="./img/12.PNG">';
        document.getElementById("b13").innerHTML = '<img src ="./img/13.PNG">';
        document.getElementById("b14").innerHTML = '<img src ="./img/14.PNG">';
        document.getElementById("b15").innerHTML = '<img src ="./img/15.PNG">';
        document.getElementById("b16").innerHTML = '<img src ="./img/16.PNG">';
        document.getElementById("b17").innerHTML = '<img src ="./img/17.PNG">';
        document.getElementById("b18").innerHTML = '<img src ="./img/18.PNG">';
        document.getElementById("b19").innerHTML = '<img src ="./img/19.PNG">';
        document.getElementById("b20").innerHTML = '<img src ="./img/20.PNG">';
        document.getElementById("b21").innerHTML = '<img src ="./img/21.PNG">';
        document.getElementById("b22").innerHTML = '<img src ="./img/22.PNG">';
        document.getElementById("b23").innerHTML = '<img src ="./img/23.PNG">';
        document.getElementById("b24").innerHTML = '<img src ="./img/24.PNG">';
    }else if(med.checked){
        var k = Object.keys(nondupmap);
        document.getElementById(k[0]).innerHTML = '<img src ="./img/1.PNG">';
        document.getElementById(map[k[0]]).innerHTML = '<img src ="./img/2.PNG">';
        document.getElementById(k[1]).innerHTML = '<img src ="./img/3.PNG">';
        document.getElementById(map[k[1]]).innerHTML = '<img src ="./img/4.PNG">';
        document.getElementById(k[2]).innerHTML = '<img src ="./img/5.PNG">';
        document.getElementById(map[k[2]]).innerHTML = '<img src ="./img/6.PNG">';
        document.getElementById(k[3]).innerHTML = '<img src ="./img/7.PNG">';
        document.getElementById(map[k[3]]).innerHTML = '<img src ="./img/8.PNG">';
        document.getElementById(k[4]).innerHTML = '<img src ="./img/9.PNG">';
        document.getElementById(map[k[4]]).innerHTML = '<img src ="./img/10.PNG">';
        document.getElementById(k[5]).innerHTML = '<img src ="./img/11.PNG">';
        document.getElementById(map[k[5]]).innerHTML = '<img src ="./img/12.PNG">';
        document.getElementById(k[6]).innerHTML = '<img src ="./img/13.PNG">';
        document.getElementById(map[k[6]]).innerHTML = '<img src ="./img/14.PNG">';
        document.getElementById(k[7]).innerHTML = '<img src ="./img/15.PNG">';
        document.getElementById(map[k[7]]).innerHTML = '<img src ="./img/16.PNG">';
        document.getElementById(k[8]).innerHTML = '<img src ="./img/17.PNG">';
        document.getElementById(map[k[8]]).innerHTML = '<img src ="./img/18.PNG">';
        document.getElementById(k[9]).innerHTML = '<img src ="./img/19.PNG">';
        document.getElementById(map[k[9]]).innerHTML = '<img src ="./img/20.PNG">';

    }else if (low.checked){
        var k = Object.keys(nondupmap);
        document.getElementById(k[0]).innerHTML = '<img src ="./img/1.PNG">';
        document.getElementById(map[k[0]]).innerHTML = '<img src ="./img/2.PNG">';
        document.getElementById(k[1]).innerHTML = '<img src ="./img/3.PNG">';
        document.getElementById(map[k[1]]).innerHTML = '<img src ="./img/4.PNG">';
        document.getElementById(k[2]).innerHTML = '<img src ="./img/5.PNG">';
        document.getElementById(map[k[2]]).innerHTML = '<img src ="./img/6.PNG">';
        document.getElementById(k[3]).innerHTML = '<img src ="./img/7.PNG">';
        document.getElementById(map[k[3]]).innerHTML = '<img src ="./img/8.PNG">';
        document.getElementById(k[4]).innerHTML = '<img src ="./img/9.PNG">';
        document.getElementById(map[k[4]]).innerHTML = '<img src ="./img/10.PNG">';
        document.getElementById(k[5]).innerHTML = '<img src ="./img/11.PNG">';
        document.getElementById(map[k[5]]).innerHTML = '<img src ="./img/12.PNG">';
        document.getElementById(k[6]).innerHTML = '<img src ="./img/13.PNG">';
        document.getElementById(map[k[6]]).innerHTML = '<img src ="./img/14.PNG">';
        document.getElementById(k[7]).innerHTML = '<img src ="./img/15.PNG">';
        document.getElementById(map[k[7]]).innerHTML = '<img src ="./img/16.PNG">';
    }
}
