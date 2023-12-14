import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { StudentsComponent } from './pages/students/students.component';
import { PageWrapperComponent } from './layout/page-wrapper/page-wrapper.component';
import { DefaultPaddingComponent } from './layout/default-padding/default-padding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ToolbarComponent,
    SidebarComponent,
    StudentsComponent,
    DefaultPaddingComponent,
    PageWrapperComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '50260-clase-02-p2';
}
