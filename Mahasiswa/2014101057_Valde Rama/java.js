kursi_eco = [];
kursi_bus = [];
sisa_kursi_eco = 12;
sisa_kursi_bus = 8;

function bookingkursi()
{
	kelas = document.getElementById("kelas").value;
	jml = document.getElementById("jml").value;
	jml = parseInt(jml);

	if(kelas=="Economy")
	{
	sisa_kursi_eco -= kursi_eco.length;
	posisi_kursi = kursi_eco.length;
		if(sisa_kursi_eco>= 1 && jml <= sisa_kursi_eco)
		{
			document.getElementById("notif").innerHTML = "";
			for(a=1;a<=jml;a++)
			{
			next_kursi = posisi_kursi + a + 8;
			index = next_kursi - 9;
			document.getElementById(next_kursi).innerHTML = "<center>x<center>";
			document.getElementById("notif").innerHTML = "Economy : Terima kasih sudah membooking kursi";
			kursi_eco[index] = "x";
			}
		}
		else
		{
			document.getElementById("notif").innerHTML = "Kursi Economy yang anda pesan sudah penuh atau tidak cukup";
		}
	}
	if(kelas=="Bussines")
	{
	sisa_kursi_bus -= kursi_bus.length;
	posisi_kursi= kursi_bus.length;
		if(sisa_kursi_bus>= 1 && jml <= sisa_kursi_bus)
		{
			document.getElementById("notif").innerHTML = "";
			for(b=1;b<=jml;b++)
			{
			next_kursi= posisi_kursi + b ;
			index = next_kursi - 1; 
			document.getElementById(next_kursi).innerHTML = "<center>x<center>";
			document.getElementById("notif").innerHTML = "Bussines : Terima kasih sudah membooking kursi";
			kursi_bus[index] = "x";
			}
		}
		else
		{
			document.getElementById("notif").innerHTML = "Kursi Bussines yang anda pesan sudah penuh atau tidak cukup";
		}
	}

}