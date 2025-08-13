import { NgModule } from "@angular/core";

import { StatusImagePipe } from "./status-image.pipe";
import { StatusPipe } from "./status.pipe";
import { FilterPipe } from "./filter.pipe";

@NgModule({
    declarations: [StatusImagePipe, StatusPipe, FilterPipe],
    exports: [StatusImagePipe, StatusPipe, FilterPipe]
})
export class StatusModule {}