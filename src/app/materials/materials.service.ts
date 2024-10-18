import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { AddMaterial } from './models/add-material.model';
import { Material } from './models/material.model';
import { UpdateMaterial } from './models/update-material.model';

@Injectable({
  providedIn: 'root'
})
export class MaterialsService {
  private readonly apiUrl: string = environment.apiUrl + '/materials';

  constructor(private readonly httpClient: HttpClient) { }

  addMaterial(addMaterial: AddMaterial): Observable<Material> {
    return this.httpClient.post<Material>(this.apiUrl, addMaterial);
  }

  getMaterials(): Observable<Material[]> {
    return this.httpClient.get<Material[]>(this.apiUrl);
  }

  getMaterial(id: string): Observable<Material> {
    return this.httpClient.get<Material>(`${this.apiUrl}/${id}`);
  }

  updateMaterial(id: string, updateMaterial: UpdateMaterial): Observable<Material> {
    return this.httpClient.patch<Material>(`${this.apiUrl}/${id}`, updateMaterial);
  }

  deleteMaterial(id: string): Observable<Material> {
    return this.httpClient.delete<Material>(`${this.apiUrl}/${id}`);
  }
}
