package br.com.jacquesonlima.app_finance.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Relatorio {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private Date periodo;
  private double totalDeDespesas;
  private double saldoFinalDaCarteira;

  public Date getPeriodo() {
    return periodo;
  }

  public void setPeriodo(Date periodo) {
    this.periodo = periodo;
  }

  public double getTotalDeDespesas() {
    return totalDeDespesas;
  }

  public void setTotalDeDespesas(double totalDeDespesas) {
    this.totalDeDespesas = totalDeDespesas;
  }

  public double getSaldoFinalDaCarteira() {
    return saldoFinalDaCarteira;
  }

  public void setSaldoFinalDaCarteira(double saldoFinalDaCarteira) {
    this.saldoFinalDaCarteira = saldoFinalDaCarteira;
  }

}
