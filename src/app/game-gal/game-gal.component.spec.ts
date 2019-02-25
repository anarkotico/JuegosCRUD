import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameGalComponent } from './game-gal.component';

describe('GameGalComponent', () => {
  let component: GameGalComponent;
  let fixture: ComponentFixture<GameGalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameGalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameGalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
