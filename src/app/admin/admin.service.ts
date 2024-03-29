import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../appConstants';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { AdminDetail } from './admin-detail';


const API_URL = AppConstants.baseURL;
const admins = 'admins';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  /**
    * Returns the Observable object containing the list of user retrieved from the API
    * @returns The list of admins in real time
    */
  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(API_URL + admins);
  }

  /**
    * Returns the Observable object containing the admin retrieved from the API
    * @returns The admin
    */
  getAdminDetail(adminId): Observable<AdminDetail> {
    return this.http.get<AdminDetail>(API_URL + admins + '/' + adminId);
  }

  /**
  * Creates an admin
  * @param admin The user which will be created
  * @returns The confirmation of the admin's creation
  */
  createAdmin(admin): Observable<AdminDetail> {
    return this.http.post<AdminDetail>(API_URL + admins, admin);
  }

  /**
  * Updates an user
  * @param user The editorial which will be update
  * @returns The confirmation of the user's update
  */
  updateAdmin(admin): Observable<AdminDetail> {
    return this.http.put<AdminDetail>(API_URL + admins + '/' + admin.id, admin);
  }

  deleteAdmin(id: number): Observable<Admin> {
    const url = API_URL + admins + "/" + id;

    return this.http.delete<Admin>(url);
  }


}
