import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Category, UtilService } from '@angular-eBooks/sys-utils';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'eb-siderail',
  templateUrl: './siderail.component.html',
  styleUrls: ['./siderail.component.scss']
})
export class SiderailComponent implements OnInit, OnDestroy {
  categories: Category[];
  subject: Subject<any>;

  constructor(
    private utilService: UtilService,
    private router: Router
  ) {}

  ngOnInit() {
    this.subject = new Subject<any>();
    this.categories = [
      {
        'id': 'cat1',
        'title': 'Arts & Music',
        'domElmtId': 'a&m'
      },
      {
        'id': 'cat2',
        'title': 'Biographies',
        'domElmtId': 'biogrph'
      },
      {
        'id': 'cat3',
        'title': 'Business',
        'domElmtId': 'bsns'
      },
      {
        'id': 'cat4',
        'title': 'Kids',
        'domElmtId': 'kds'
      },
      {
        'id': 'cat5',
        'title': 'Comics',
        'domElmtId': 'cmcs'
      },
      {
        'id': 'cat6',
        'title': 'Computers & Tech',
        'domElmtId': 'cmp&tc'
      },
      {
        'id': 'cat7',
        'title': 'Cooking',
        'domElmtId': 'ckng'
      },
      {
        'id': 'cat8',
        'title': 'Hobbies & Craft',
        'domElmtId': 'hbs&crft'
      },
      {
        'id': 'cat9',
        'title': 'Edu & Reference',
        'domElmtId': 'ed&rfrnc'
      },
      {
        'id': 'cat10',
        'title': 'Gay & Lesbian',
        'domElmtId': 'gy&lsbn'
      },
      {
        'id': 'cat11',
        'title': 'Health & Fitness',
        'domElmtId': 'hlth&ftns'
      },
      {
        'id': 'cat12',
        'title': 'History',
        'domElmtId': 'hstr'
      },
      {
        'id': 'cat13',
        'title': 'Home & Garden',
        'domElmtId': 'hm&grdn'
      },
      {
        'id': 'cat14',
        'title': 'Horror',
        'domElmtId': 'hrr'
      },
      {
        'id': 'cat15',
        'title': 'Entertainment',
        'domElmtId': 'entrtnmnt'
      },
      {
        'id': 'cat16',
        'title': 'Literature & Fiction',
        'domElmtId': 'ltrtr&fctn'
      },
      {
        'id': 'cat17',
        'title': 'Medical',
        'domElmtId': 'mdcl'
      },
      {
        'id': 'cat18',
        'title': 'Mysteries',
        'domElmtId': 'mstrs'
      },
      {
        'id': 'cat19',
        'title': 'Parenting',
        'domElmtId': 'prntng'
      },
      {
        'id': 'cat20',
        'title': 'Social Science',
        'domElmtId': 'sclsnc'
      },
      {
        'id': 'cat21',
        'title': 'Religion',
        'domElmtId': 'rlgn'
      },
      {
        'id': 'cat22',
        'title': 'Romance',
        'domElmtId': 'rmnc'
      },
      {
        'id': 'cat23',
        'title': 'Science & Math',
        'domElmtId': 'scnc&mth'
      },
      {
        'id': 'cat24',
        'title': 'Sci-Fi & Fantasy',
        'domElmtId': 'scf&fnts'
      },
      {
        'id': 'cat25',
        'title': 'Self-Help',
        'domElmtId': 'slfhlp'
      },
      {
        'id': 'cat26',
        'title': 'Sports',
        'domElmtId': 'sprts'
      },
      {
        'id': 'cat27',
        'title': 'Teen',
        'domElmtId': 'tn'
      },
      {
        'id': 'cat28',
        'title': 'Travel',
        'domElmtId': 'trvl'
      },
      {
        'id': 'cat29',
        'title': 'True Crimes',
        'domElmtId': 'trcrms'
      },
      {
        'id': 'cat30',
        'title': 'Westerns',
        'domElmtId': 'wstrns'
      }
    ];
  }

  ngOnDestroy() {
    this.subject.next();
    this.subject.complete();
  }

  handleCategoryClick(category: Category) {
    const catSend = 'biography';
    this.router.navigate(['/global/category', catSend]);
  }

}
