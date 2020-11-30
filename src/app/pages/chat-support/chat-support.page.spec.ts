import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatSupportPage } from './chat-support.page';

describe('ChatSupportPage', () => {
  let component: ChatSupportPage;
  let fixture: ComponentFixture<ChatSupportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatSupportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatSupportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
