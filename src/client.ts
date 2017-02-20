import { Injectable, Provider } from '@angular/core';
import {
  SoyuzClient,
} from 'soyuz';

// Base class that contains the Soyuz client.
@Injectable()
export class Soyuz extends SoyuzClient {}

// Create a soyuz singleton.
export function createSoyuzSingleton(client: SoyuzClient): Provider {
  return {
    provide: Soyuz,
    useValue: client,
  };
}
