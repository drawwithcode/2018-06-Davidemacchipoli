var myTable; //per caricare la tabella
var balls = [];


function preload(){
  // put preload code here
  myTable = loadTable('assets/Lottery_Mega_Millions_Winning_Numbers__Beginning_2002.csv', 'csv', 'header') // come scrivere i dati
  //header significa che nel file c'è la prima riga che mi dice le categorie
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // put setup code here
  var  tableObjects = myTable.getObject();
  //var tableObject = myTable.getObject(); //crea un oggetto in Javascript
  //console.log(tableObject);


//ciclo in un oggetto
 for ( var rowIndex in tableObjects) { //questo loop prende ogni valore e crea un oggetto
   var row = tableObjects[rowIndex];
  // console.log(row.name); //mi da solo i nomi
      //console.log(row.body);  //mi da solo la variabile body
    //  console.log(row['body']); //modo diverso di scrivere le stesse cose
      console.log(row['Mega Ball']); //devo ricordami di moltiplicare *1


      for (var r = 0; r < row.length; r++) {
          var from_long = rows[r].getNum("from_long")
          var from_lat = rows[r].getNum("from_lat")
          var x = map(from_long,-180,180,0,width)
          var y = map(from_lat,-90,90,height,0)
          ellipse(x,y,3,3)




 }

}


function draw() {
}
