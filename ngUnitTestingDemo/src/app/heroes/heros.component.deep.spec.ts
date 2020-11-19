import { of } from 'rxjs';
import { HeroesComponent } from './heroes.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from '../hero/hero.component';
import { NO_ERRORS_SCHEMA, Component, Input } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { By } from '@angular/platform-browser';


describe('HerosComponent (deep)', () => {
  
  let HEROS;

  let mockHeroService;

  // Create an Array of Heros
  let fixture: ComponentFixture<HeroesComponent>;


  beforeEach(() => {

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

    HEROS = [
      {id: 1, name: 'SpiderDude', strength: 8},
      {id: 2, name: 'Wonderful Woman', strength: 24},
      {id: 3, name: 'Super Dude', strength: 55},
    ],
    // 4. TestBed Configuration will creating modules like production code
    TestBed.configureTestingModule({

      // using the actual HeroComponent
      declarations: [
         HeroesComponent,
         HeroComponent],
      providers:[
        {provide: HeroService, useValue: mockHeroService}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(HeroesComponent);
    mockHeroService.getHeroes.and.returnValue(of(HEROS));
    fixture.detectChanges();
  });

  it('should render each hero as a HeroComponent and have a count of 3', () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROS));


    // run ngOnInit

    fixture.detectChanges();

    // gets a list of elements that are created
    const heroComponentDebugElements = fixture.debugElement.queryAll(By.directive(HeroComponent));

    expect(heroComponentDebugElements.length).toEqual(3);


  })

  it('should hero have HeroComponent hero name Spider Dude', () => {

   //  arrange
    mockHeroService.getHeroes.and.returnValue(of(HEROS));


    // run ngOnInit

    fixture.detectChanges();

    // gets a list of elements that are created

    // act
    const heroComponentDebugElements = fixture.debugElement.queryAll(By.directive(HeroComponent));

    // asseert
    expect(heroComponentDebugElements[0].componentInstance.hero.name).toEqual('SpiderDude')

  })
})