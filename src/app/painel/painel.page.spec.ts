import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PainelPage } from './painel.page';

describe('PainelPage', () => {
  let component: PainelPage;
  let fixture: ComponentFixture<PainelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PainelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
