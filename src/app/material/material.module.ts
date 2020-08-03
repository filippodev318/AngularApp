import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';



const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatTabsModule,
  MatInputModule,
  FormsModule,
  MatSnackBarModule
]

@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents],
  declarations: []
})
export class MaterialModule { }
