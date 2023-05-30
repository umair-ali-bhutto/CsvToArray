import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-csvtest',
  templateUrl: './csvtest.component.html',
  styleUrls: ['./csvtest.component.css']
})
export class CsvtestComponent implements OnInit {


  constructor() { }
  ngOnInit() {
  }

a:number = 0;
b:number = 0;
c:number = 0;
  fileReaded: any;
  prog:number=0;

  csv2Array(fileInput: any) {
    this.fileReaded = fileInput.target.files[0];

    let reader: FileReader = new FileReader();
    reader.readAsText(this.fileReaded);

    reader.onload = (e) => {
      let csv: any = reader.result;
      let allTextLines = csv.split(/\r|\n|\r/);
      let headers = allTextLines[0].split(',');
      let array = [];
      let json = [];
      // console.log("============================================================== csv ==============================================================");
      // console.log(csv);
      // console.log(csv.length);
      // console.log("============================================================== csv ==============================================================");
      // console.log("============================================================== alltextlines ==============================================================");
      // console.log(allTextLines);
      // console.log(allTextLines.length);
      // console.log("============================================================== alltextlines ==============================================================");
      // console.log("============================================================== headers ==============================================================");
      // console.log(headers);
      // console.log(headers.length);
      // console.log("============================================================== headers ==============================================================");



      console.log("============================================================== LOOP START ==============================================================");

      for (let i = 1; i < allTextLines.length; i++) {
        let data = allTextLines[i].split(',');
        if (data.length === headers.length) {
          let arraystring = [];
          for (let j = 0; j < headers.length; j++) {
            //array
            arraystring.push(data[j]);
          }
          this.a++;
          //JSON
          let jsonstring = {
            "sNo": arraystring[0],
            "merchantId": arraystring[1],
            "mdrOnUs": arraystring[2],
            "mdrOffUs": arraystring[3],
            "province": arraystring[4],
            "terminalId": arraystring[5],
            "mobileNumber": arraystring[6],
            "email": arraystring[7],
            "serialNumber": arraystring[8],
            "model": arraystring[9],
          };
          //console.log(this.a);
          
          console.log("ARRAY\n", arraystring);
          console.log("JSON\n", jsonstring);

          array.push(arraystring);
          json.push(jsonstring);
        }

      }
      console.log("============================================================== LOOP END ==============================================================");

      // const myInterval = setInterval(() => {
      //   this.b++;
      //   this.prog = (this.b/array.length)*100;
      //   console.log('1',(this.b/array.length)*100);
      //   console.log('2',(this.b*100/array.length));
        
      //   console.log(this.b);
      //   console.log("arrayLength",array.length);
      //   if((this.b/array.length)*100 === 100){
      //     clearInterval(myInterval);
      //   }
      // }, 1);

json.forEach(element => {
    this.c++;
    this.prog = this.c*100/json.length;
    JSON.stringify(element);
});




console.log("FINAL ARRAY >>>>>>>", array);
console.log("FINAL ARRAY >>>>>>>", JSON.stringify(array));
      console.log("FINAL JSON >>>>>>>", json);
      console.log("FINAL JSON >>>>>>>", JSON.stringify(json));
    }

  }





}



// var a0 = "";
// var a1 = "";
// var a2 = "";
// var a3 = "";
// var a4 = "";
// var a5 = "";
// var a6 = "";
// var a7 = "";
// var a8 = "";
// var a9 = "";
// if(i == 0){
          //   a0 = arraystring[0];
          //   a1 = arraystring[1];
          //   a2 = arraystring[2];
          //   a3 = arraystring[3];
          //   a4 = arraystring[4];
          //   a5 = arraystring[5];
          //   a6 = arraystring[6];
          //   a7 = arraystring[7];
          //   a8 = arraystring[8];
          //   a9 = arraystring[9];
          // }
          
          //  //JSON
          // let jsonstring2 = {
          //   [a0]: arraystring[0],
          //   [a1]: arraystring[1],
          //   [a2]: arraystring[2],
          //   [a3]: arraystring[3],
          //   [a4]: arraystring[4],
          //   [a5]: arraystring[5],
          //   [a6]: arraystring[6],
          //   [a7]: arraystring[7],
          //   [a8]: arraystring[8],
          //   [a9]: arraystring[9],
          // };
          //console.log("JSON\n", jsonstring2);





          