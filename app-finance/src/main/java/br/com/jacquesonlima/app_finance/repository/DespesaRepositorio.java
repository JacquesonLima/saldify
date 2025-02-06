package br.com.jacquesonlima.app_finance.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.jacquesonlima.app_finance.model.Despesa;

@Repository
public interface DespesaRepositorio extends JpaRepository<Despesa, Long> {

}
