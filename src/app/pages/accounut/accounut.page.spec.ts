import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccounutPage } from './accounut.page';

describe('AccounutPage', () => {
  let component: AccounutPage;
  let fixture: ComponentFixture<AccounutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccounutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccounutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
