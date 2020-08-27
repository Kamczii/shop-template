import { TestBed } from '@angular/core/testing';

import { OrderPanelService } from './order-panel.service';

describe('OrderPanelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderPanelService = TestBed.get(OrderPanelService);
    expect(service).toBeTruthy();
  });
});
