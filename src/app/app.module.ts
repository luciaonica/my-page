import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { MainContentComponent } from './pages/projects/main-content/main-content.component';
import { HeaderComponent } from './pages/projects/header/header.component';
import { ButtonComponent } from './pages/projects/button/button.component';
import { ProjectsComponent } from './pages/projects/projects/projects.component';
import { ProjectItemComponent } from './pages/projects/project-item/project-item.component';
import { AddProjectComponent } from './pages/projects/add-project/add-project.component';
import { SkillsComponent } from './pages/skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    MainContentComponent,
    HeaderComponent,
    ButtonComponent,
    ProjectsComponent,
    ProjectItemComponent,
    AddProjectComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
