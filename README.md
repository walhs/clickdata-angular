# clickdata-angular

#Devise

* 1) ```$gem 'devise'```

* 2) ```$bundle install```

* 3) ```$rails generate devise:install```

* 4) In config/environments/development.rb add

``` 'config.action_mailer.default_url_options = { :host => 'localhost:3000' }' ```

* 5) $rails g devise user

* 6) $rake db:migrate

* 7) $annotate --routes