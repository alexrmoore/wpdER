import { Injectable } from '@angular/core';
import { LockedRoomsService } from './locked-rooms.service';

@Injectable({
  providedIn: 'root'
})
export class HintSelectionService {
  hintText = 'Click\n"New Hint"\nto get a hint';
  hintCounter = 0;
  allowHint = true;
  hideNewHintButton = false;
  buttonHideTimer = false;
  hintTimerRef;
  hintStopwatch: number;

  totalHintCount = 0;

  reflection1Hints = ['Try applying the law of reflection!',
  'Law of reflection:\nAngle of incidence = Angle of reflection',
  'Alternate Angles\n(aka. Z-Angles)\nare equal!'];
  reflection2Hints = ['Remember The Law of Reflection: Angle of Incidence = Angle of Reflection',
  'Remember that both waves and particles exhibit reflection!',
  'Remember that light also exhibits reflection!'];
  interference1Hints = ['Align the second waveform so that it will superpose with the first waveform to produce the third waveform.',
  'Sum the amplitudes of the waveforms to get the resultant waveform.',
  'The trough of the second waveform should be just to the right of the right waveform.'];
  interference2Hints = ['Waves do show interference.',
  'Both water waves and light show interference.',
  'Particles cannot interfere.'];
  photoelectric1Hints = ['Construct an experiment to prove the photoelectric effect!',
  'The vacuum chamber and battery should be at the top and bottom of the schematic.',
  'The incident light should shine on the metal plate.'];
  photoelectric2Hints = ['Photoelectrons are emitted from a metal surface when illuminated.',
  'The energy of photoelectrons is dependent on the frequency of the incident light.',
  'The photoelectric effect does not support a wave theory of light.'];
  overallHints = ['Select the phenomena that show the wave and particle nature of light, respectively.',
  'Reflection supports both a wave and particle theory of light.',
  'Interference and the photoelectric effect support different theories of light.'];

  constructor(private lockedRoomsService: LockedRoomsService) { }

  HintCounter(): void {
  if (this.hintCounter < 3) {
    this.allowHint = true;
    this.hintCounter += 1;
    this.totalHintCount += 1;
  }
  else {
    this.allowHint = false;
    this.hintText = 'No more hints\navailable!';
    this.hideNewHintButton = true;
  }}


  HintPicker(): void {
    if (this.lockedRoomsService.roomLocked[0] || this.lockedRoomsService.roomLocked[1]) {
      this.HintCounter();
      if (this.allowHint){
        this.hintText = this.reflection1Hints[this.hintCounter - 1];
      }
    } else if (this.lockedRoomsService.roomLocked[2]) {
      this.HintCounter();
      if (this.allowHint){
        this.hintText = this.reflection2Hints[this.hintCounter - 1];
      }
    } else if (this.lockedRoomsService.roomLocked[3]) {
      this.HintCounter();
      if (this.allowHint){
        this.hintText = this.interference1Hints[this.hintCounter - 1];
      }
    } else if (this.lockedRoomsService.roomLocked[4]) {
      this.HintCounter();
      if (this.allowHint){
        this.hintText = this.interference2Hints[this.hintCounter - 1];
      }
    } else if (this.lockedRoomsService.roomLocked[5]) {
      this.HintCounter();
      if (this.allowHint){
        this.hintText = this.photoelectric1Hints[this.hintCounter - 1];
      }
    } else if (this.lockedRoomsService.roomLocked[6]) {
      this.HintCounter();
      if (this.allowHint){
        this.hintText = this.photoelectric2Hints[this.hintCounter - 1];
      }
    } else if (this.lockedRoomsService.roomLocked[7]) {
      this.HintCounter();
      if (this.allowHint){
        this.hintText = this.overallHints[this.hintCounter - 1];
      }
    } else {
      this.hintText = 'You\'ve completed the Escape Room!';
      this.allowHint = false;
      this.hideNewHintButton = true;
    }
  }

  startHintTimer(timeInput): void{
    this.buttonHideTimer = true;
    const hintStartTime = Date.now() - (this.hintStopwatch || 0);
    this.hintTimerRef = setInterval(() => {
      this.hintStopwatch = (Date.now() - hintStartTime);
      if (this.hintStopwatch > timeInput) {
        clearInterval(this.hintTimerRef);
        this.buttonHideTimer = false;
        this.hintStopwatch = 0;
      }
    });
  }
}
