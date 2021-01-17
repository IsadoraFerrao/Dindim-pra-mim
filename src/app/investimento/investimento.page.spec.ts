import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InvestimentoPage } from './investimento.page';

describe('InvestimentoPage', () => {
  let component: InvestimentoPage;
  let fixture: ComponentFixture<InvestimentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestimentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InvestimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
