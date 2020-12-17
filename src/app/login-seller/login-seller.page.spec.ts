import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginSellerPage } from './login-seller.page';

describe('LoginSellerPage', () => {
  let component: LoginSellerPage;
  let fixture: ComponentFixture<LoginSellerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSellerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginSellerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
