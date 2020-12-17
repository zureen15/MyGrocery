import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserTypePage } from './user-type.page';

describe('UserTypePage', () => {
  let component: UserTypePage;
  let fixture: ComponentFixture<UserTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
