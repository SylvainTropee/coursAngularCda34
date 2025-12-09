import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
  standalone: true
})
export class Detail {

  constructor(private activatedRoute: ActivatedRoute) {
    let id = this.activatedRoute.snapshot.paramMap.get('id')
    console.log("Id : " + id)
    // let id =  this.activatedRoute.snapshot.params['id']
    let truc = this.activatedRoute.snapshot.queryParamMap.get("truc")
    console.log("truc : " + truc)
  }


}
