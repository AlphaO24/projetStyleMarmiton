import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PayerPage } from './payer.page';

describe('PayerPage', () => {
  let component: PayerPage;
  let fixture: ComponentFixture<PayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
