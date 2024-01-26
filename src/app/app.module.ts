import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MyPipePipe } from './pipes/my-pipe.pipe';
import { MyDirectiveDirective } from './directives/my-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MyPipePipe,
    MyDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
