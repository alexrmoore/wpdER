import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PuzzleTrackingService {
  puzzleAttempts = [0, 0, 0, 0, 0, 0, 0, 0];

  constructor() { }
}
