kursi_eco = [];
kursi_bus = [];
sisa_kursi_eco = 12;
sisa_kursi_bus = 8;

function bookingKursi()
{
	//ambil nilai kelas
	kelas = document.getElementById("kelas").value;
	//ambil nilai jumlah penumpang
	jml = document.getElementById("jml").value;
	jml = parseInt(jml);
	//periksa kelas apa yang dipilih

	//periksa apakah kuota kursi msih mencukupi
	//jika masih cukup, tambahkan penumpang

if(kelas==2)
{
	sisa_kursi_eco -= kursi_eco.length;
	posisi_kursi = kursi_eco.length;

		if(sisa_kursi_eco>= 1 && jml <= sisa_kursi_eco)
		{
			document.getElementById("pesan").innerHTML = "";
			//tambahkan kursi
			for(a=1;a<=jml;a++)
			{
				next_kursi = posisi_kursi + a + 8;
				index = next_kursi - 9;
				document.getElementById(next_kursi).innerHTML = "x";
				document.getElementById("pesan").innerHTML = "Anda telah memesan kursi Ekonomi, Terima Kasih";
				kursi_eco[index] = "x";
			}
		}
		else
		{
			//kuota kursi tidak mencukupi
			document.getElementById("pesan").innerHTML = "Kursi Ekonomi tidak mencukupi";
		}
}

if(kelas==1)
{
	sisa_kursi_bus -= kursi_bus.length;
	posisi_kursi= kursi_bus.length;

		if(sisa_kursi_bus>= 1 && jml <= sisa_kursi_bus)
		{
			document.getElementById("pesan").innerHTML = "";
			//tambahkan kursi
			for(a=1;a<=jml;a++)
			{
				next_kursi= posisi_kursi + a ;
				index = next_kursi - 1; 
				document.getElementById(next_kursi).innerHTML = "x";
				document.getElementById("pesan").innerHTML = "Anda telah memesan kursi Bisnis, Terima Kasih";
				kursi_bus[index] = "x";
			}
		}
		else
		{
			//kuota kursi tidak mencukupi
			document.getElementById("pesan").innerHTML = "Kursi Bisnis tidak mencukupi";
		}
}

}