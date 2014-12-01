kursi_eco = [];
kursi_bus = [];
sisa_kursi_eco = 12;
sisa_kursi_bus = 8;

function bookingKursi(){
//ambil nilai kelas
kelas = document.getElementById("kelas").value;
//ambil nilai jumlah penumpang
jml = document.getElementById("jml").value;
jml = parseInt(jml);
//periksa kelas apa yang dipilih

//periksa apakah kuota kursi msih mencukupi
//jika masih cukup, tambahkan penumpang
if(kelas=="Economy"){
window.alert("test");
sisa_kursi_eco = 12 - kursi_eco.length;
posisi_kursi = kursi_eko.length;

		if(sisa_kursi_eco>= 1 && jml <= sisa_kursi_eco){
		//tambahkan kursi
			for(d=1;d<=jml;d++){
			next_kursi = posisi_kursi + d + 8;
			index = next_kursi - 9; 
			document.getElementById(next_kursi).innerHTML = "x";
			kursi_eco[index] = "x";
			}
		}
		else{
		//kuota kursi tidak mencukupi
		document.getElementById("notif").innerHTML = "Kursi ekonomi tidak mencukupi";
		}
}
if(kelas=="Bussiness"){
window.alert("test");
sisa_kursi_bus = 8 - kursi_bus.length;
posisi_kursi2= kursi_bus.length;

		if(sisa_kursi_bus>= 1 && jml <= sisa_kursi_bus){
		//tambahkan kursi
			for(d=1;d<=jml;d++){
			next_kursi= posisi_kursi2 + d ;
			index2 = next_kursi - 9; 
			document.getElementById(next_kursi).innerHTML = "x";
			kursi_bus[index] = "x";
			}
		}
		else{
		//kuota kursi tidak mencukupi
		document.getElementById("notif").innerHTML = "Kursi bussiness tidak mencukupi";
		}
}

}