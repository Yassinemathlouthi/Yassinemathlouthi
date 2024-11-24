import { Component,Input,OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { NgFor } from '@angular/common';
import { FaceSnapsService } from '../services/facesnaps.service';
import { FaceSnapG1Component } from '../face-snap-g1/face-snap-g1.component';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports:[NgFor,FaceSnapG1Component,HeaderComponent,RouterOutlet],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.css'
})
export class FaceSnapListComponent implements OnInit {
  constructor(private faceSnapsService: FaceSnapsService) { 
  }
  mySnap!: FaceSnap[];
  ngOnInit(): void {
    this.mySnap = this.faceSnapsService.faceSnaps;
      this.mySnap=[
      {
        title:'Archibald',
        description:'Mon meilleur ami depuis tout petit !',
        ImageUrl:'https://editions-sarbacane.com/media/pages/bd/archibald-operation-trolls-3/2f4a5afe7f-1686082329/archibald-5-400x-q80.webp',
        createDate:new Date(),
        buttonText:"Oh Snap!",
        snaps:0,
        index:1,
      },
      {
        title:'ice montain',
        description:'endroit magnifique',
        ImageUrl:'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        createDate:new Date(),
        buttonText:"Oh Snap!",
        snaps:0,
        index:2,
      },
      {
        title:'un bon repas',
        description:'Yumm c bon!',
        ImageUrl:'https://c7.alamy.com/compfr/pn7n8t/pasta-alla-norma-cuisine-italienne-traditionnelle-avec-l-aubergine-tomate-fromage-et-basilic-vue-d-en-haut-pn7n8t.jpg',
        createDate:new Date(),
        buttonText:"Oh Snap!",
        snaps:0,
        index:3,
      }
    ];}
}


