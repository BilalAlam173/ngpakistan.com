import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ROUTES } from '../../app.route';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { NavigationComponent } from './navigation.component';
import { HomeComponent } from '../../home/home.component';
import { SignupComponent } from '../../signup/signup.component';
import { NoContentComponent } from '../../no-content/no-content.component';
import { LoginComponent } from '../../login/login.component';
import { MainBannerComponent } from '../main-banner/main-banner.component';
import { MeetupCardComponent } from '../meetup-card/meetup-card.component';
import { ConferenceCardComponent } from '../conference-card/conference-card.component';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { SocialCardComponent } from '../social-card/social-card.component';
import { PartnersComponent } from '../partners/partners.component';
import { ContactusCardComponent } from '../contactus-card/contactus-card.component';
import { IntroCardComponent } from '../intro-card/intro-card.component';
import { BigCardComponent } from '../big-card/big-card.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        NavigationComponent,
        HomeComponent,
        LoginComponent,
        SignupComponent,
        NoContentComponent,
        MainBannerComponent,
        ContactusCardComponent,
        MainBannerComponent,
        MeetupCardComponent,
        ConferenceCardComponent,
        ProjectCardComponent,
        SocialCardComponent,
        PartnersComponent,
        IntroCardComponent,
        BigCardComponent,
      ],
      imports: [ 
        RouterTestingModule.withRoutes(ROUTES),
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
