import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {
  request_header_user_key = 'KYC_USER';
//request_header_user_value = 'PE55524';
  request_header_user_value = 'DN25575';
  //request_header_user_value = 'BN94001';

  headers: HttpHeaders = new HttpHeaders()
  .set(this.request_header_user_key, this.request_header_user_value)
  .set('Content-Type', 'application/json; charset=utf-8')
  .set('Accept', 'application/json');

  constructor(
    private http: HttpClient
  ) {}

  private formatErrors(error: any) {
    return Observable.throw(error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, { params, headers: this.headers })
      .pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      {headers: this.headers}
    ).pipe(catchError(this.formatErrors));
  }

  getSetofQuestions(): Observable<any> {
    return this.http.get("./assets/civ/contact-questions.json")
      .catch(this.formatErrors)
      .map((res: Response) => res);
  }

  getSetofIdentityQuestions(): Observable<any> {
    return this.http.get("./assets/civ/identity-questions.json")
      .catch(this.formatErrors)
      .map((res: Response) => res);
  }

  getSetofCountryQuestions(): Observable<any> {
    return this.http.get("./assets/civ/country-questions.json")
      .catch(this.formatErrors)
      .map((res: Response) => res);
  }

}