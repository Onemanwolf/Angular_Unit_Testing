import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeroComponent } from './hero.component';

import { compileComponent } from '@angular/core/src/render3/jit/directive';


// 1. Shallow integration Test
describe('HeroComponent (shallow)', () => {
  let heroComponent: HeroComponent;

  // 2. Fixture created

  let fixture: ComponentFixture<HeroComponent>;

  // 3. Before Each setup TestBed
  beforeEach(async(() => {

    // 4. TestBed Configuration will call
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
     schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(HeroComponent);
  }));

  it('should correct hero', () => {
    fixture.componentInstance.hero = {id: 1 , name: 'SuperDude', strength: 3};

    expect(fixture.componentInstance.hero.name).toEqual('SuperDude');
  })

  it ('should render hero name in anchor tag', () => {
    fixture.componentInstance.hero = {id: 1 , name: 'SuperDude', strength: 3};
    fixture.detectChanges();


    expect(fixture.debugElement.query(By.css('a')).nativeElement.textContent).toContain('SuperDude');;
    // expect(fixture.nativeElement.querySelector('a').textContent).toContain('SuperDude');
  });

  describe('new up instance test', () => {


    beforeEach(() => {
       heroComponent = new HeroComponent();

      });

      it('should have name equal to', () => {
         heroComponent.hero = {id: 1, name: 'SuperTim', strength: 70};
         expect(heroComponent.hero.name).toEqual('SuperTim');
      });

  });


});
