function dataHandling() {

  var input = [
                  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
              ];
  var height = input.length;
  var i = 1;
  var indexArray = 0;

  while (i<=height) {
    console.log ('Nomor ID: ' + input [indexArray][0])
    console.log ('Nama Lengkap: ' + input [indexArray][1])
    console.log ('TTL: ' + input [indexArray][2] + ' ' + input[indexArray][3])
    console.log ('Hobi: ' + input [indexArray][4])
    console.log()
  indexArray++
  i++
  }

}

dataHandling()
