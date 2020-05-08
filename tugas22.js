function tugas22() {
    var x = "Saya ingin belajar bersama";

    var z = x.split(" ");

    
    y = z.forEach(function(item, index){

        console.log("Item : " + item + " index ke " + index);     
        
    });

    return y;
}

tugas22()