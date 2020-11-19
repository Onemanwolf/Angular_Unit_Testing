import { of } from 'rxjs';
import { HeroesComponent } from './heroes.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from '../hero/hero.component';
import { NO_ERRORS_SCHEMA, Component, Input } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { By } from '@angular/platform-browser';


describe('HerosComponent (shallow)', () => {
  let component: HeroesComponent;
  let HEROS;

  let mockHeroService;

  // Create an Array of Heros
  let fixture: ComponentFixture<HeroesComponent>;
  @Component({
    selector: 'app-hero',
    template: '<div></div>',
  })
  class FakeHeroComponent {
    @Input() hero: Hero;
    // @Output() delete = new EventEmitter();
  }

  // 3. Before Each setup TestBed
  beforeEach(() => {

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

    HEROS = [
      {id: 1, name: 'SpiderDude', strength: 8},
      {id: 2, name: 'Wonderful Woman', strength: 24},
      {id: 3, name: 'Super Dude', strength: 55},
    ],
    // 4. TestBed Configuration will creating modules like production code
    TestBed.configureTestingModule({
      declarations: [
         HeroesComponent,
         FakeHeroComponent],
      providers:[
        {provide: HeroService, useValue: mockHeroService}
      ],
       // schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(HeroesComponent);

    component = new HeroesComponent(mockHeroService);
  });



    // Delete Method
  describe('delete', () => {
    it('should delete a hero when called', () => {
      // setup mock observable
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROS;
      component.delete(HEROS[2]);
      expect(component.heroes[1].name).toBe('Wonderful Woman');
    })


  it('should call deleteHero', () => {

      // arrange
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROS;

      // act
      component.delete(HEROS[2]);
      // assert interaction
      expect(mockHeroService.deleteHero).toHaveBeenCalled();
  })

  })

  describe('get heros', ()=> {
    it('should set heros correctly from service', () => {
      mockHeroService.getHeroes.and.returnValue(of(HEROS));
      fixture.detectChanges();
      expect(fixture.componentInstance.heroes.length).toBe(3);

    })

  })

    describe('dom elements', () => {
      it('should create one li for each hero',() => {
        // arrange in before each gives a centralized

        // act
        mockHeroService.getHeroes.and.returnValue(of(HEROS));
        // assert
        fixture.detectChanges();
        expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3);
      })
    })

})
