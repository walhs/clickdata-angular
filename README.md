# clickdata-angular

#Devise

* ```$gem 'devise'```

* ```$bundle install```

* ```$rails generate devise:install```

* In config/environments/development.rb add

``` 'config.action_mailer.default_url_options = { :host => 'localhost:3000' }' ```

* ``` $rails g devise user ```

* ``` $rake db:migrate ```

* ``` $annotate --routes ```

## CORS Devise

### Include MimeResponds and gem 'responders' no Gemfile
https://github.com/plataformatec/devise/issues/3160

```
class ApplicationController < ActionController::API
  include ActionController::MimeResponds
end
```

### Configurando Middleware
https://github.com/cyu/rack-cors

Gemfile
gem 'rack-cors', :require => 'rack/cors'

development.rb
config.middleware.insert_before Warden::Manager, Rack::Cors

### Adicionando respond_to no application controller
https://github.com/cloudspace/angular_devise

### Start postgres mac ox
* pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start

### Stop postgres mac ox
* pg_ctl -D /usr/local/var/postgres stop -s -m fast

### Add token model
* rails generate model Token token:string user:references
* rails generate controller Tokens --skip-assets --skip-template-engine

### Backup banco Postgres
* pg_dump fake_lunch_hub_development > bkp_banco_dev

### Restore backup
* createdb restore_tests
* psql restore_tests < bkp_banco_dev
* psql fake_lunch_hub_development < bkp_gordinha_dev

### ERRO restore
http://stackoverflow.com/questions/21122598/postgres-user-does-not-exist
http://stackoverflow.com/questions/15301826/psql-fatal-role-postgres-does-not-exist
ERROR:  role "postgres" does not exist

* psql postgres
* CREATE USER postgres SUPERUSER;
* CREATE DATABASE postgres WITH OWNER postgres;