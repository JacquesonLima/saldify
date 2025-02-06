package br.com.jacquesonlima.app_finance.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.jacquesonlima.app_finance.model.Carteira;

@Repository
public interface CarteiraRepositorio extends JpaRepository<Carteira, Long> {
  
}
