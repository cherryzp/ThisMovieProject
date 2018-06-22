function doDisplay(){
    var con = document.getElementById("myDIV");
    var btn = document.getElementById("myDIV_Btn");
    if(con.style.display=='none'){
    	btn.style.display = 'none';
        con.style.display = 'block';
    }else{
        con.style.display = 'none';
    }
}

