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