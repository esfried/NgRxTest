import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { stopReducer } from './reducers/stop.reducer';
import { StopListComponent } from './stop/stop-list.component';
import { StopService } from './services/stop.service';
import { HttpClientModule } from '@angular/common/http';
import { DevExtremeModule, DxButtonModule, DxDataGridModule } from 'devextreme-angular';
import { EffectsModule } from '@ngrx/effects';
import { StopEffects } from './effects/stop.effects';
import { StopEditComponent } from './stop/stop-edit.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    StopEditComponent,
    StopListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DevExtremeModule,
    DxButtonModule,
    DxDataGridModule,
    EffectsModule.forRoot([StopEffects]),
    StoreModule.forRoot({ stops: stopReducer }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    StopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
