import { TestBed, inject } from '@angular/core/testing';

import { PesquisaPessoasService } from './pesquisa-pessoas.service';

describe('PesquisaPessoasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PesquisaPessoasService]
    });
  });

  it('should be created', inject([PesquisaPessoasService], (service: PesquisaPessoasService) => {
    expect(service).toBeTruthy();
  }));
});
