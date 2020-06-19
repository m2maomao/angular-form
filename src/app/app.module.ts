import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; // 引入响应式表单

import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@NgModule({
   declarations: [
      AppComponent,
      NameEditorComponent,
      ProfileEditorComponent
   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule // 响应式表单
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
