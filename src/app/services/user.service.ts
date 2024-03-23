import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  list() : Observable<any> {
    return this.http.get("../assets/results.json");
  }

  async getUserByEmail(email: string) {
    const result = await this.list().toPromise();
    let selectedUser = null;
    result.forEach ((user: any) => {
      if (user.email == email) {
        selectedUser = user;
        return;
      }
    });
    return selectedUser;
  }

}
