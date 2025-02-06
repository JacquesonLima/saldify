package br.com.jacquesonlima.app_finance.controller;

import java.util.List;
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

import br.com.jacquesonlima.app_finance.model.Usuario;
import br.com.jacquesonlima.app_finance.service.UsuarioServico;

@RestController
@RequestMapping("/usuarios")
public class UsuarioControlador {

  @Autowired
  private UsuarioServico usuarioServico;

  @PostMapping
  public Usuario criarUsuario(@RequestBody Usuario usuario) {
    return usuarioServico.criarUsuario(usuario);
  }

  @GetMapping("/id")
  public Optional<Usuario> buscarUsuario(@RequestParam Long id) {
    return usuarioServico.buscarUsuario(id);
  }

  @GetMapping
  public List<Usuario> listarTodos() {
    return usuarioServico.listarTodos();
  }

  @PutMapping
  public Usuario atualizarUsuario(@RequestBody Usuario usuario) {
    return usuarioServico.atualizarUsuario(usuario);
  }

  @DeleteMapping
  public void excluirUsuario(@RequestParam Long id) {
    usuarioServico.excluirUsuario(id);
  }

}
