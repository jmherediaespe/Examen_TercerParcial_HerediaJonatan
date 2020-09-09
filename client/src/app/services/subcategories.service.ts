import { Injectable } from '@angular/core';
import { Subcategorie } from '../models/Subcategories'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubcategoriesService {

  API_URI = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  getCategories(){
    return this.http.get(`${this.API_URI}/subcategories`);
  }

  getSubcategories(COD_CATEGORIA: string){
    return this.http.get(`${this.API_URI}/subcategories/${COD_CATEGORIA}`);
  }

  getSubcategorie(COD_CATEGORIA: string, COD_SUB_CATEGORIA: string){
    return this.http.get(`${this.API_URI}/subcategories/${COD_CATEGORIA}/${COD_SUB_CATEGORIA}`);
  }

  saveSubcategorie(subcategorie: Subcategorie){
    return this.http.post(`${this.API_URI}/subcategories`,subcategorie);
  }

  deleteSubcategorie(id: string){
    return this.http.delete(`${this.API_URI}/subcategories/${id}`);
  }

  updateSubcategorie(id: string|number, updatedsubcategorie: Subcategorie): Observable<Subcategorie> {
    return this.http.put<Subcategorie>(`${this.API_URI}/subcategories/${id}`, updatedsubcategorie);
  }
}
