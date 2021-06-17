import { Component, OnInit } from '@angular/core';
import {ConfigFileService} from "../../services/config-file-service";
import {ConfigFile} from "../../models/ConfigFile";

@Component({
  selector: 'app-config-files',
  templateUrl: './config-files.component.html',
  styleUrls: ['./config-files.component.css']
})
export class ConfigFilesComponent implements OnInit {
  configFile: ConfigFile[]=[];
  constructor(private _confogService: ConfigFileService) { }

  ngOnInit(): void {
    this._confogService.get().subscribe((data: any[]) => {
      console.log("data = " + data);
      this.configFile = data;
    })
  }

}
