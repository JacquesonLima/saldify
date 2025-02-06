package br.com.jacquesonlima.app_finance.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.jacquesonlima.app_finance.model.Despesa;
import br.com.jacquesonlima.app_finance.repository.DespesaRepositorio;

@Service
public class DespesaServico {

  @Autowired
  private DespesaRepositorio despesaRepositorio;

  public Despesa adicionarDespesa(Despesa despesa) {
    return despesaRepositorio.save(despesa);
  }

  public Optional<Despesa> buscarDespesa(Long id) {
    return despesaRepositorio.findById(id);
  }

  public Despesa editarDespesa(Despesa despesa) {
    return despesaRepositorio.save(despesa);
  }

  public void apagarDespesa(Long id) {
    despesaRepositorio.deleteById(id);
  }

}
