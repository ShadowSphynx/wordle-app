import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordleInfoComponent } from './wordle-info.component';

describe('WordleInfoComponent', () => {
  let component: WordleInfoComponent;
  let fixture: ComponentFixture<WordleInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordleInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
