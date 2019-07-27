document.write('<br>')
document.write('soal no 2')
document.write('<br>')


var n = 9

for(x = 0; x < n; x++){
    for(y = 0; y < n; y++){
        if( x % 2 == 1 != y % 2 == 0){
            document.write('+')
        }else{
            document.write(' - ')
        }
    }
    document.write('<br>')
}