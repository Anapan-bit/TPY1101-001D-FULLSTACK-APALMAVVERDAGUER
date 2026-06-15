package TPY1101_301.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class UsuarioRequest {

    @NotBlank
    private String username;

    /** Obligatoria al crear; opcional al editar (vacío = no cambiar). */
    private String password;

    @NotBlank
    private String nombre;

    @Email
    private String email;

    private String rol;
}
