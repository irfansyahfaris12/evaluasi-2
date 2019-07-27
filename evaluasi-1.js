document.write('<br>')
document.write('soal no 1')
document.write('<br>')


var n = 9

for(x = 0; x < n; x++){
    for(y = 0; y < n; y++){
        if(x == y || y == 8 - x || x == 4){
            document.write('+')
        }else{
            document.write(' - ')
        }
    }
    document.write('<br>')
}