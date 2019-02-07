import { Component, OnInit } from '@angular/core';

import { MemberEntity } from '../models/member.model';
import { MembersApiService } from '../members-api.service';

@Component({
  selector: 'app-members-table',
  templateUrl: './members-table.component.html',
  styles: []
})
export class MembersTableComponent implements OnInit{
  members: MemberEntity[];
  company: string;

  constructor(private membersApi: MembersApiService) { }

  loadMembers() {
    this.membersApi.getAllMembers(this.company)
      .subscribe((ms) => this.members = ms);
  }

  ngOnInit(){
    this.members = [];
    this.company='lemoncode';
  }

  onChange(e){
    this.company = e.target.value;
  }

}
