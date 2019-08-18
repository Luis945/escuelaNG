import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
// import 'datatables.net-bs4';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hola';
  dtOptions: any = {};
  dt: any;

  ngOnInit() {

    var datos = [
      {"id":1,"first_name":"Miguelita","last_name":"Leatherborrow","email":"mleatherborrow0@xinhuanet.com","gender":"Female","ip_address":"207.227.36.246"},
      {"id":2,"first_name":"Gayla","last_name":"Gruszka","email":"ggruszka1@columbia.edu","gender":"Female","ip_address":"177.60.215.222"},
      {"id":3,"first_name":"Elsworth","last_name":"Costelloe","email":"ecostelloe2@uol.com.br","gender":"Male","ip_address":"193.205.86.93"},
      {"id":4,"first_name":"Agosto","last_name":"Goshawke","email":"agoshawke3@infoseek.co.jp","gender":"Male","ip_address":"204.31.37.0"},
      {"id":5,"first_name":"Banky","last_name":"Beesley","email":"bbeesley4@yale.edu","gender":"Male","ip_address":"69.63.184.229"},
      {"id":6,"first_name":"Zebadiah","last_name":"Posten","email":"zposten5@shop-pro.jp","gender":"Male","ip_address":"237.169.162.223"},
      {"id":7,"first_name":"Collin","last_name":"Pexton","email":"cpexton6@sohu.com","gender":"Male","ip_address":"212.243.26.188"},
      {"id":8,"first_name":"Dallon","last_name":"Emmert","email":"demmert7@nps.gov","gender":"Male","ip_address":"20.124.194.74"},
      {"id":9,"first_name":"Peggi","last_name":"Meedendorpe","email":"pmeedendorpe8@oakley.com","gender":"Female","ip_address":"180.166.56.78"},
      {"id":10,"first_name":"Nada","last_name":"Trowsdall","email":"ntrowsdall9@geocities.jp","gender":"Female","ip_address":"3.5.212.61"},
      {"id":1,"first_name":"Miguelita","last_name":"Leatherborrow","email":"mleatherborrow0@xinhuanet.com","gender":"Female","ip_address":"207.227.36.246"},
      {"id":2,"first_name":"Gayla","last_name":"Gruszka","email":"ggruszka1@columbia.edu","gender":"Female","ip_address":"177.60.215.222"},
      {"id":3,"first_name":"Elsworth","last_name":"Costelloe","email":"ecostelloe2@uol.com.br","gender":"Male","ip_address":"193.205.86.93"},
      {"id":4,"first_name":"Agosto","last_name":"Goshawke","email":"agoshawke3@infoseek.co.jp","gender":"Male","ip_address":"204.31.37.0"},
      {"id":5,"first_name":"Banky","last_name":"Beesley","email":"bbeesley4@yale.edu","gender":"Male","ip_address":"69.63.184.229"},
      {"id":6,"first_name":"Zebadiah","last_name":"Posten","email":"zposten5@shop-pro.jp","gender":"Male","ip_address":"237.169.162.223"},
      {"id":7,"first_name":"Collin","last_name":"Pexton","email":"cpexton6@sohu.com","gender":"Male","ip_address":"212.243.26.188"},
      {"id":8,"first_name":"Dallon","last_name":"Emmert","email":"demmert7@nps.gov","gender":"Male","ip_address":"20.124.194.74"},
      {"id":9,"first_name":"Peggi","last_name":"Meedendorpe","email":"pmeedendorpe8@oakley.com","gender":"Female","ip_address":"180.166.56.78"},
      {"id":10,"first_name":"Nada","last_name":"Trowsdall","email":"ntrowsdall9@geocities.jp","gender":"Female","ip_address":"3.5.212.61"}
    ];

    this.dtOptions = {
      dom: 'Bfrtip',
      // Configure the buttons
      buttons: [
        'copy',
        'print',
        'excel',
        'pdf',
      ],
      pagingType: "full_numbers",
      data: datos,
      columns: [
          {
            data: "id",
            title: "id",
          }, 
          {
            data: "first_name",
            title: "first_name"
          },
          {
            data: "last_name",
            title: "last_name"
          }, 
          {
            data: "email",
            title: "email",
        }, 
        {
            data: "gender",
            title: "gender",
        }, 
        {
            data: "ip_address",
            title: "ip_address"
        }
      ]
    };


    setTimeout(() => {
       this.cambiarEstilos();
    }, 200);
  
  }

  
  cambiarEstilos() {
    $(".buttons-copy").html("Copiar");
    $(".buttons-print").html("Imprimir");
  }

}
