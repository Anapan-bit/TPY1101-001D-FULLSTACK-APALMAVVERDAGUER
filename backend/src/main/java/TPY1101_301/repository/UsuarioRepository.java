package TPY1101_301.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import TPY1101_301.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Optional<Usuario> findByUsername(String username);

    boolean existsByUsername(String username);
}
