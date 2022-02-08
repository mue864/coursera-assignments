var names=new Array();
names[0]="Mutsa";
names[1]="Jake";
names[2]="Boris";
names[3]="Jonah";
names[4]="Jim";
names[5]="Francis";
names[6]="Jerry";
names[7]="Petros";
names[8]="Laura";
names[9]="Jonny";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}