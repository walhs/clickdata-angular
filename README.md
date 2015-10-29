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