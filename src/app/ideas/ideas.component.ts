import { Component, OnInit } from '@angular/core';
import { IdeaService } from '../idea.service';


@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {
  ideas;

  constructor(
    private ideaService: IdeaService
  ) { 
  }

  ngOnInit() {
    this.ideas = this.ideaService.getIdeas();
  }

  deleteIdea(ideaId: number): void{
    this.ideaService.deleteIdea(ideaId);
  
  }

}
