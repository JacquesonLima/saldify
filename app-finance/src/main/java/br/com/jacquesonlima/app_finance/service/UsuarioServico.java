package br.com.jacquesonlima.app_finance.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.jacquesonlima.app_finance.model.Usuario;
import br.com.jacquesonlima.app_finance.repository.UsuarioRepositorio;

@Service
public class UsuarioServico {

  @Autowired
  private UsuarioRepositorio usuarioRepositorio;

  public Usuario criarUsuario(Usuario usuario) {
    return usuarioRepositorio.save(usuario);
  }

  public Optional<Usuario> buscarUsuario(Long id) {
    return usuarioRepositorio.findById(id);
  }

  public List<Usuario> listarTodos() {
    return usuarioRepositorio.findAll();
  }

  public Usuario atualizarUsuario(Usuario usuario) {
    return usuarioRepositorio.save(usuario);
  }

  public void excluirUsuario(Long id) {
    usuarioRepositorio.deleteById(id);
  }

}
