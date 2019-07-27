document.write('<br>')
document.write('soal no 4')
document.write('<br>')




const jualMobil = {
    iklan:function() {
        document.write( `BU, saya ${this.nama}, jual mobil ${this.merek}, tahun ${this.tahun}, bekas`)
        
    }
};

const jual = Object.create(jualMobil);
jual.nama = "tompel"
jual.merek = "avanza"
jual.tahun = "2017"
jual.iklan();