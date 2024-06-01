import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClientModule, HttpClient } from "@angular/common/http";

@NgModule({
    imports: [HttpClient],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [HttpClientModule]
})

export class AppModule { }