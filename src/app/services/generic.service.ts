import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class GenericService {

    baseUrl: string = "http://localhost:3000/"

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

    getByMat(componentUrl: string, payload: any, successCallback: any = () => { }) {

    }

    autenticar(componentUrl: string, payload: any, successCallback: any = () => { }) {

    }

    getEstudianteDocs(componentUrl: string, payload: any, successCallback: any = () => { }) {

    }

    crear(componentUrl: string, payload: any, successCallback: any = () => { }) {

    }

    actualizar(componentUrl: string, id: string, payload: any, successCallback: any = () => { }) {

    }

    borrar(componentUrl: string, payload: any, successCallback: any = () => { }) {
    }
}