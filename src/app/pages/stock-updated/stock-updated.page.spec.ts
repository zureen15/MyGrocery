import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StockUpdatedPage } from './stock-updated.page';

describe('StockUpdatedPage', () => {
  let component: StockUpdatedPage;
  let fixture: ComponentFixture<StockUpdatedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockUpdatedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StockUpdatedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
