import { NgModule } from "@angular/core";
import { MaterialModule } from "./models/material/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [],
  imports: [MaterialModule, FlexLayoutModule],
  exports: [MaterialModule, FlexLayoutModule],
})
export class SharedModule {}
