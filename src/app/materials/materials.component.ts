import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MaterialsService } from './materials.service';
import { Material } from './models/material.model';

@Component({
  selector: 'app-materials',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './materials.component.html',
  styleUrl: './materials.component.scss'
})
export class MaterialsComponent implements OnInit {
  materials$: Observable<Material[]> = new Observable<Material[]>();
  selectedMaterial: Material | null = null;
  addMaterialForm: FormGroup = new FormGroup({
    title: new FormControl(null, Validators.required),
    description: new FormControl(null)
  });
  updateMaterialForm: FormGroup = new FormGroup({
    title: new FormControl(null, Validators.required),
    description: new FormControl(null)
  });

  constructor(private readonly materialsService: MaterialsService) { }

  ngOnInit(): void {
    this.materials$ = this.materialsService.getMaterials();
  }

  onAdd(): void {
    this.materialsService.addMaterial(this.addMaterialForm.value).subscribe({
      error: (error: HttpErrorResponse) => console.error(error.error.message),
      complete: () => this.addMaterialForm.reset()
    });
  }

  onUpdate(id: string): void {
    this.materialsService.updateMaterial(id, this.updateMaterialForm.value).subscribe({
      error: (error: HttpErrorResponse) => console.error(error.error.message),
      complete: () => {
        this.selectedMaterial = null;
        this.updateMaterialForm.reset();
      }
    });
  }

  onDelete(id: string): void {
    this.materialsService.deleteMaterial(id).subscribe({
      error: (error: HttpErrorResponse) => console.error(error.error.message)
    });
  }
}
