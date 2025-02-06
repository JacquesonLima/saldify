package br.com.jacquesonlima.app_finance.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.jacquesonlima.app_finance.model.Despesa;
import br.com.jacquesonlima.app_finance.service.DespesaServico;

@RestController
@RequestMapping("/despesas")
public class DespesaControlador {

  @Autowired
  private DespesaServico despesaServico;

  @PostMapping
  public Despesa adicionarDespesa(@RequestBody Despesa despesa) {
    return despesaServico.adicionarDespesa(despesa);
  }

  @GetMapping("/id")
  public Optional<Despesa> buscarDespesa(@RequestParam Long id) {
    return despesaServico.buscarDespesa(id);
  }

  @PutMapping
  public Despesa editarDespesa(@RequestBody Despesa despesa) {
    return despesaServico.editarDespesa(despesa);
  }

  @DeleteMapping
  public void apagarDespesa(@RequestParam Long id) {
    despesaServico.apagarDespesa(id);
  }

}
