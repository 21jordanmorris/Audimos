import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddSourcesPage } from './add-sources.page';

describe('AddSourcesPage', () => {
  let component: AddSourcesPage;
  let fixture: ComponentFixture<AddSourcesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSourcesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddSourcesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
