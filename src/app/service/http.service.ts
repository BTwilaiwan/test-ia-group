import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class HttpServices {
    constructor(
        private http: HttpClient,
        private route: ActivatedRoute
    ) {
    }

    get(url: string, params?: any): Promise<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
            params: params || {}
        };
        return this.http.get(url, httpOptions).toPromise().then(response => {
            return response;
        }).catch((err) => {
            throw err;
        });
    }

    post(url: string, data?: any): Promise<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            })
        };
        return this.http.post(url, data, httpOptions).toPromise().then(response => {
            return response;
        }).catch((err) => {
            throw err;
        });
    }

    put(url: string, data?: any): Promise<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        return this.http.put(url, data, httpOptions).toPromise().then(response => {
            return response;
        }).catch((err) => {
            throw err;
        });
    }

    patch(url: string, data?: any): Promise<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        return this.http.patch(url, data, httpOptions).toPromise().then(response => {
            return response;
        }).catch((err) => {
            throw err;
        });
    }

    delete(url: string): Promise<any> {
        const token = localStorage.getItem('Authorization');
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        return this.http.delete(url, httpOptions).toPromise().then(response => {
            return response;
        }).catch((err) => {
            throw err;
        });
    }

    refresh(): Promise<any> {
        // let token = this.authenticationService.getToken();
        const httpOptions = {
            // headers: new HttpHeaders({
            //     'Content-Type': 'application/json',
            //     Authorization: token
            // })
        };
        const url = '/auth/refresh';
        return this.http.post(url, { id: '' }, httpOptions).toPromise().then((response: any) => {
            if (response.result_code === '20000') {
                // this.authenticationService.setToken(response);
            } else {
                // this.authenticationService.removeToken();
            }
            return response;
        }).catch((err) => {
            throw err;
        });
    }
}
