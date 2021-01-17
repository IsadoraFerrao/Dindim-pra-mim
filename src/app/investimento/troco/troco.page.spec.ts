import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrocoPage } from './troco.page';

describe('TrocoPage', () => {
  let component: TrocoPage;
  let fixture: ComponentFixture<TrocoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrocoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrocoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
