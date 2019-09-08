import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {
  ideas = [];

  constructor(
    private http: HttpClient
  ) { }

  getIdeas(){
    return this.http.get('/assets/ideas.json');
  }

  deleteIdea(ideaId: number): void{
    console.log(ideaId)
    console.log(this.getIdeas()[0]);
  }
}