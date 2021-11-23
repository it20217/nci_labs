(function (){
  for(i=99; i>=0; i--){
    if(i>1){
      document.writeln(" "+ "<br/>");
      document.writeln(i+" bottles of beer on the wall, "+i +" bottles of beer"+ "<br/>");
      document.writeln("Take one down and pass it around, "+(i-1) +" bottles of beer on the wall"+ "<br/>");
      document.writeln(" "+ "<br/>");
    } else if(i==1){
      document.writeln(i+" bottle of beer on the wall, "+i +" bottle of beer"+ "<br/>");
      document.writeln("Take one down and pass it around, no more bottles of beer on the wall"+ "<br/>");
      document.writeln(" "+ "<br/>");
    } else {
      document.writeln("No more bottles of beer on the wall, no more bottles of beer"+ "<br/>");
      document.writeln("Go to the store and buy some more, 99 bottles of beer on the wall")+ "<br/>";
      document.writeln(" "+ "<br/>");
    }
  }
})();