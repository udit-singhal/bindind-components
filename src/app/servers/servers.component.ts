import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created !';
  serverName = 'Testserver';
  serverCreated =false;
  servers = ['Testserver'];
 
  constructor() {
    setTimeout(() =>{
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created ! Name of the server is: '+this.serverName;
  }
  onUpdateServerName(event: Event){
   this.serverName = (<HTMLInputElement>event.target).value;
  }
 

}
