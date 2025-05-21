
// @Component({
//   selector: 'app-dialog',
//   imports: [],
//   templateUrl: './dialog.component.html',
//   styleUrl: './dialog.component.scss'
// })
// export class DialogComponent {

// }

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { User } from '../user.model';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
// import { CommonModule } from '@angular/common';
import { User } from '../viewcomp/viewcomp.component';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog',
  imports: [ CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class UserDialogComponent {
  userForm: FormGroup;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User | null
  ) {
        console.log('data: ', data);
    this.userForm = this.fb.group({
      id: [data?.id || null],
      name: [data?.name || ''],
      email: [data?.email || ''],
      imageUrl: [data?.imageUrl || ''],
    });

    this.imagePreview = data?.imageUrl || null;
  }

  onFileChange(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
        this.userForm.patchValue({ imageUrl: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    this.dialogRef.close(this.userForm.value);
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }
}
