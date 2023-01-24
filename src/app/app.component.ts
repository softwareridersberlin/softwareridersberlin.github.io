import { Component, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { delay } from 'rxjs';
import { LoadingService } from './core/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // animation triggers go here
  ]
})
export class AppComponent {
  title = 'software-riders-berlin';
  active = 1;
  loading: boolean = false;

  constructor(private offcanvasService: NgbOffcanvas, private _loading: LoadingService) {}

  ngOnInit() {
    this.listenToLoading();
  }

  /**
   * Listen to the loadingSub property in the LoadingService class. This drives the
   * display of the loading spinner.
   */
  listenToLoading(): void {
    this._loading.loadingSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }

  openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}
}
