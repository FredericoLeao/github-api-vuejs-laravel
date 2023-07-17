- Uso da API do Github, com Laravel, VueJS, Pinia, Bootstrap

# Para Instalar:

- Instalar pacotes JS

```
cd appjs
yarn install
```

- Instalar pacotes PHP

```
cd app-php
composer install
```

- Aponte um domínio/vhost no Apache para o diretório "app-php/public"
  - Defina as diretrizes de permissões para o diretório public
    ```
    <Directory DIRETORIO_DO_PROJETO/app-php/public>
        Require all granted
        AllowOverride all
    </Directory>
    ```

- Certifique-se de que o mod_rewrite esteja instalado e habilitado
```
a2enmod rewrite
```

- Certifique-se de que as pastas "public" e "storage" estejam com a permissão correta. Coloque o usuário do Apache como Owner das pastas:

```
chown -R www-data app-php/storage
chown -R www-data app-php/public
```

# Para acessar

- Ambiente de desenvolvimento:
  - Execute(dentro da pasta "appjs"):
    ```
    yarn run dev"
    ```
  - **Acesse**: http://localhost:5173

- *Obs: A aplicação php deve estar rodando na porta 80 da mesma máquina
