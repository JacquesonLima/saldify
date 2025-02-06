package br.com.jacquesonlima.app_finance.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.jacquesonlima.app_finance.model.Relatorio;

@Repository
public interface RelatorioRepositorio extends JpaRepository<Relatorio, Long> {

}
