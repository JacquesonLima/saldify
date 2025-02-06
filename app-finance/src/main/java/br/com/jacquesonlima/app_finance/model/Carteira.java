package br.com.jacquesonlima.app_finance.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Carteira {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String nome;
  private double saldoAtual;
  private String moeda;

  public String getNome() {
    return nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public double getSaldoAtual() {
    return saldoAtual;
  }

  public void setSaldoAtual(double saldoAtual) {
    this.saldoAtual = saldoAtual;
  }

  public String getMoeda() {
    return moeda;
  }

  public void setMoeda(String moeda) {
    this.moeda = moeda;
  }

}
