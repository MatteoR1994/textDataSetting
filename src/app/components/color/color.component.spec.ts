import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DumbService } from 'src/app/dumb.service';

import { ColorComponent } from './color.component';

describe('ColorComponent', () => {
  let component: ColorComponent;
  let testBedService: DumbService;
  let fixture: ComponentFixture<ColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorComponent ],
      providers: [DumbService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // testBedService = TestBed.get(DumbService);
    testBedService = TestBed.inject(DumbService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#setColor should initialize service color property', () => {
    component.setColor('green');
    expect(testBedService.color).toBe('green');
  });
});
