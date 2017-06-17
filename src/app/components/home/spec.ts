import { provide } from '@angular/core';
import {
  it,
  fit,
  inject,
  describe,
  ddescribe,
  beforeEachProviders,
} from '@angular/core/testing';

// Load the implementations that should be tested
import {Home} from './home.component';

class MockItemsService {
  public loadItems: string = 'Mocked Service';
}

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    Home,
  ]);

  it('should log ngOnInit', inject([Home], (home) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    home.ngOnInit();
    expect(console.log).toHaveBeenCalledWith('Hello Home');
  }));

});
