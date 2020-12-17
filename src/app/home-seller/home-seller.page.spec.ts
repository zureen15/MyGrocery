import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeSellerPage } from './home-seller.page';

describe('HomeSellerPage', () => {
  let component: HomeSellerPage;
  let fixture: ComponentFixture<HomeSellerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSellerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeSellerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
