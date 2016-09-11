import { NgModule, ModuleWithProviders, OnInit } from "@angular/core";
import { Ng2AutoScrollerDirective } from "./ng2-auto-scroller.directive";
import { Ng2AutoScrollerService } from "./ng2-auto-scroller.service";

// export * from "./src/translate.pipe";
// export * from "./keep-scroll.service";
// export * from "./src/translate.parser";

@NgModule({
    imports: [],
    declarations: [
      Ng2AutoScrollerDirective
    ],
    providers: [
      Ng2AutoScrollerService
    ],
    exports: []
})
export class Ng2AutoScrollerModule {
  // static forRoot(elements: any[] = []): ModuleWithProviders {
  //     return {
  //         ngModule: KeepScrollModule,
  //         providers: [KeepScrollService]
  //     };
  // }
}
