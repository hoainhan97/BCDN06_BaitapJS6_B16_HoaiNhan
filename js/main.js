//TÌM SỐ NGUYÊN DƯƠNG NHỎ NHẤT

function soNguyenDuong() {
    var i = 0;
    var sum = 0;

    while (sum < 10000) {
        i++;
        sum +=i;
    }
    document.getElementById("txtSoNguyenDuong").innerHTML = i;
    console.log(i);
    
}
document.getElementById("btnSonguyenduong").onclick = soNguyenDuong;

// TÍNH TỔNG 
function tinhTong() {
    var soX = document.getElementById("SoX").value;
    var soN = document.getElementById("SoN").value;  

    var sum = 0;
    var i = 1;
    var luyThua = 1;

    while (i <= soN) {
        
        luyThua = Math.pow(soX,i);
        sum += luyThua;
        i++;
    }
    document.getElementById("txtTinhTong").innerHTML = sum;
}
document.getElementById("btnTinhTong").onclick = tinhTong;

//TÍNH GIAI THỪA
function giaiThua() {
    var SoN = document.getElementById("soN").value;
    var sum = 1
    for(var i = 1; i <= SoN; i++ ){
        sum *= i;
    }
    document.getElementById("txtGiaiThua").innerHTML = sum;
}
document.getElementById("btnTinhGiaiThua").onclick = giaiThua;



// IN THẺ DIV
function inTheDiv() {
    var content = "";
    for(var i = 0; i < 10; i++){
        if (i % 2 == 0) {
            var div = '<div class="alert bg-primary">Div chẵn</div>'
            content += div;
        }else if (i % 2 != 0) {
            var div = '<div class="alert bg-danger">Div lẻ</div>'
            content += div;
        }
        
    }
    document.getElementById("txtInThe").innerHTML = content;
}
document.getElementById("btnInThe").onclick = inTheDiv;