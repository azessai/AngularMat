import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatButtonToggleModule, MatBadgeModule, MatProgressSpinnerModule, MatProgressBarModule, MatToolbarModule, MatSidenavModule, MatMenuModule, MatListModule, MatDividerModule, MatGridListModule, MatExpansionModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatCardModule, MatTabsModule, MatStepperModule, MatSelectModule, MatAutocompleteModule, MatCheckboxModule, MatRadioModule, MatTooltipModule, MatSnackBarModule, MatDialogModule, MatTableModule, MatSortModule, MatPaginatorModule } from '@angular/material';

const MaterialComponents = [
  // CDK
  // A11yModule,
  // BidiModule,
  // ObserversModule,
  // OverlayModule,
  // PlatformModule,
  // PortalModule,
  // CdkStepperModule,
  // CdkTableModule,
  // CdkTreeModule,
  // DragDropModule,
  // Material
  MatAutocompleteModule,
  MatBadgeModule,
  // MatBottomSheetModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  // MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  // MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  // MatSliderModule,
  // MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  // MatTreeModule,
  MatButtonModule
]

@NgModule({
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ]
})
export class MaterialModule { }
