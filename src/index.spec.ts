import 'reflect-metadata';

import { ReflectiveInjector } from '@angular/core';
import { Soyuz } from './client';
import { SoyuzModule } from './module';
import { SoyuzClient } from 'soyuz';

describe('soyuz-angular', () => {
  const client = {} as SoyuzClient;
  const result = SoyuzModule.withClient(() => {
    return client;
  });

  it('should contain SoyuzModule as ngModule', () => {
    expect(result.ngModule).toBe(SoyuzModule);
  });
});
