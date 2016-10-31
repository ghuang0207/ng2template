import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GetDataComponent } from './getdata.component';
import { PostFormComponent } from './postform.component';
import { AppServices } from './app.service';


// we need to add the @NGModule declaration to tell angular2 that the AppModule class is an module that runs on top of BrowserModule 
// and its Root component is AppComponent
@NgModule({
    imports: [BrowserModule,
        HttpModule,
        FormsModule],
    declarations: [
        AppComponent,
        GetDataComponent,
        PostFormComponent
    ],
    providers: [AppServices],
    bootstrap: [AppComponent]
})
export class AppModule {

}
