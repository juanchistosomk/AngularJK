import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public persona: Array<any> = [];

  constructor( private personaService: PersonaService ) 
  { 
    this.personaService.getPersona().subscribe((res:any) => {
      console.log(res);
      this.persona=res;
    });
  }

  ngOnInit(): void {
  }

}
