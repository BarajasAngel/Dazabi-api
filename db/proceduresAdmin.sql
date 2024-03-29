USE WASTE2MONEYDB;

DELIMITER $$
USE `WASTE2MONEYDB`$$

CREATE PROCEDURE ` ` (
  IN _ID_ADMIN INT,
  IN _NOMBRE VARCHAR(30),
  IN _TELEFONO VARCHAR(30),
  IN _ID_USUARIO VARCHAR(30)
)
BEGIN 
  IF _ID_ADMIN = 0 THEN
    INSERT INTO TB_ADMIN (NOMBRE, TELEFONO, ID_USUARIO)
    VALUES (_NOMBRE, _TELEFONO, _ID_USUARIO);

    SET _ID_ADMIN = LAST_INSERT_ID();
  ELSE
    UPDATE TB_ADMIN
    SET
    NOMBRE = _NOMBRE,
    TELEFONO = _TELEFONO,
    ID_USUARIO = _ID_USUARIO
    WHERE ID_ADMIN = _ID_ADMIN;
  END IF;

  SELECT _ID_ADMIN AS 'id';
END