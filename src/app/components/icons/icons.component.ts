import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notesservices/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  notelist: any = [];
  constructor(private noteservice: NotesService) {

}
ngOnInit(): void {
      this.deletenote();
    }
deletenote() {
  return this.noteservice.deletenote().subscribe((response: any) => {
    console.log("note deleted", response)
  })
}
}
 