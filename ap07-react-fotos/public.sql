INSERT INTO tb_log (termo_de_busca)
VALUES
('cat');

SELECT * FROM tb_log;


-- CREATE TABLE tb_log(
--   cod_log SERIAL PRIMARY KEY,
--   termo_de_busca VARCHAR(500) NOT NULL,
--   data_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );


-- tb_log(cod_log, termo_de_busca, data_hora)

-- 1, cat, 13/11/2025 21h39