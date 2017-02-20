import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { createSoyuzSingleton } from './client';
import { SoyuzClient } from 'soyuz';

@NgModule({})
export class SoyuzModule {
  /**
   * Defines a map of ApolloClients or a single instance
   */
  public static withClient(client: SoyuzClient): ModuleWithProviders {
    return {
      ngModule: SoyuzModule,
      providers: [
        createSoyuzSingleton(client),
      ],
    };
  }
}
