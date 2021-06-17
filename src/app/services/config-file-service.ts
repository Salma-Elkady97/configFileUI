import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import any = jasmine.any;
import {ConfigFile} from "../models/ConfigFile";

@Injectable({
  providedIn: 'root'
})
export class ConfigFileService {

  constructor(private _httpClient:HttpClient) { }

  get():Observable<any>{
    return this._httpClient.get("http://localhost:8080/configfile");
  }
  post():void
  {
    this._httpClient.post("http://localhost:8080/configfile" ,  ConfigFile);
  }
}
