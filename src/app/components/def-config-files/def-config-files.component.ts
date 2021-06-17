import { Component, OnInit } from '@angular/core';
import {defConfigFileService} from "../../services/def-config-file-service";
import {DefaultConfigFile} from "../../models/DefaultConfigFile";

@Component({
  selector: 'app-def-config-files',
  templateUrl: './def-config-files.component.html',
  styleUrls: ['./def-config-files.component.css']
})
export class DefConfigFilesComponent implements OnInit {
  defultConfig:DefaultConfigFile[]=[];
  constructor(private _defConfigService:defConfigFileService) { }

  ngOnInit(): void {
    this._defConfigService.get().subscribe((data: any[]) => {
      console.log("data = " + data);
      this.defultConfig = data;
    })
  }

}
