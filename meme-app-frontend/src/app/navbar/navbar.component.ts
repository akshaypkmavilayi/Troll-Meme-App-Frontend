import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { UsercommonService } from '../usercommon.service';
import { BackendService } from '../backend.service';


declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   visible:boolean = false;
   selectedValue:any;
   
 
  constructor(public nav:NavbarService, private backend:BackendService) { }

  ngOnInit(): void {
    this.nav.showLogin();
    this.nav.showRegister();
    this.nav.hideLogout();
    this.nav.hideProfile();
   
    
    this.jqueryUiAutoComplete();
  }

  //jquery ui autocomplete part starts here

  jqueryUiAutoComplete() {  
    let allAvailableDetails:any = [];
    let allAvailableActorsandMovie:any =[];

    this.backend.getAllImages().subscribe((res:any) => {
      allAvailableDetails = res;
      //movie and actor name details
      let newArray:any=[];
      for(let i=0;i<allAvailableDetails.length;i++){
        const actors:string = allAvailableDetails[i].actorName;
        const movieNames:string = allAvailableDetails[i].movieDetails.movieName;
        console.log('movie name ' + movieNames) 
         
        if(actors.includes(',')){
          newArray = actors.split(',');
          for(let i=0;i<newArray.length;i++){
            allAvailableActorsandMovie.push(newArray[i])
          }
          
        }else{
          allAvailableActorsandMovie.push(actors);
        }
          allAvailableActorsandMovie.push(movieNames);  
      }
      //movie and actor name details ends here
    });
    

    //set the tags to the given id with autocomplete source
    $( "#tags" ).autocomplete({
      // source: availableTags
      source: allAvailableActorsandMovie
      
    });

    $(document).ready(function () {
      $('#tags').on('change', function () {
          var text = $('#tags').val();
          console.log(text);
      });
  });
  }
  onItemSelected(){
    $(document).ready(function(){
      var value = $('#tags').val();
      console.log(value);
    })
    
  }
}
