import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // 引入响应式表单

import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzButtonModule, NzCardModule, NzFormModule, NzInputModule } from 'ng-zorro-antd'; // 引入antd

registerLocaleData(en);

@NgModule({
   declarations: [
      AppComponent,
      NameEditorComponent,
      ProfileEditorComponent
   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule, // 响应式表单
      FormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      NzButtonModule,
      NzCardModule,
      NzFormModule,
      NzInputModule
   ],
   providers: [{ provide: NZ_I18N, useValue: en_US }],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
