import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class GenericService {

    baseUrl: string = "https://api.duqweb.tk/"

    constructor(private http: HttpClient) {

    }

    getAll(componentUrl: string, successCallback: any = () => { }) {
        this.http.get(this.baseUrl + componentUrl).subscribe((response: any) => {
            successCallback(response);
        }, (error) => {
            console.log(error);
        });
    }

    getById(componentUrl: string, payload: any, successCallback: any = () => { }) {
        this.http.get(this.baseUrl + componentUrl + payload).subscribe((response: any) => {
            successCallback(response);
        }, (error) => {
            console.log(error);
        });
    }

    getByUsername(componentUrl: string, payload: any, successCallback: any = () => { }) {
        this.http.get(this.baseUrl + componentUrl + payload).subscribe((response: any) => {
            successCallback(response);
        }, (error) => {
            alert('no se encontró el usuario');
        });
    }

    crear(componentUrl: string, payload: any, successCallback: any = () => { }) {
        this.http.post(this.baseUrl + componentUrl, payload).subscribe((response: any) => {
            successCallback(response);
        }, (error) => {
            console.log(error);
        }
        )
    }

    actualizar(componentUrl: string, id: string, payload: any, successCallback: any = () => { }) {
        this.http.put(this.baseUrl + componentUrl + "/" + id, payload).subscribe((response: any) => {
            successCallback(response);
        }, (error) => {
            console.log(error);
        }
        )
    }

    borrar(componentUrl: string, payload: any, successCallback: any = () => { }) {

    }

}