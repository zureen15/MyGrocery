import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RewardsAndCouponsPage } from './rewards-and-coupons.page';

describe('RewardsAndCouponsPage', () => {
  let component: RewardsAndCouponsPage;
  let fixture: ComponentFixture<RewardsAndCouponsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardsAndCouponsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RewardsAndCouponsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
