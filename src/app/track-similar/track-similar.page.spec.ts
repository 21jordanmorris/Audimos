import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrackSimilarPage } from './track-similar.page';

describe('TrackSimilarPage', () => {
  let component: TrackSimilarPage;
  let fixture: ComponentFixture<TrackSimilarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackSimilarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrackSimilarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
