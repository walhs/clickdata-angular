namespace :report do
  desc "Exige relatório de uso da plataforma"
  task usage: :environment do
    report_usage
    analisa_create_post
  end

end

def report_usage
    click_datas = ClickData.all
    i = 0
    while i < click_datas.size
        puts click_datas[i].id
        i = i + 1
    end
    puts "Analisamos #{click_datas.size} clicks."
end

def analisa_create_post
    puts CREATE_POST[:textarea]
    puts CREATE_POST[:btn_submit]
end

# Gatilhos existentes
# Criar post
CREATE_POST = {
    textarea: 'textarea',
    btn_submit: 'btn_submit'
}

# Register
REGISTER = {
    email: 'email',
    username: 'username',
    password: 'password',
    password_confirmation: 'password_confirmation',
    btn_submit: 'btn_submit'
}

# Settings
SETTINGS = {
    password: 'password',
    password_confirmation: 'password_confirmation',
    btn_submit: 'btn_submit'
}

# Single Post
POST = {
    delete_post: 'delete_post'
}

# Post List
POSTS = {
    btn_addPost: 'btn_addPost'
}

# Login
LOGIN = {
    email: 'email',
    password: 'password',
    btn_login: 'btn_login'
}

# Home Logada
MAIN = {
    btn_addPost: 'btn_addPost'
}

# Header
HEADER = {
    navbar_tracker: 'navbar_tracker',
    navbar_home: 'navbar_home',
    navbar_login: 'navbar_login',
    navbar_register: 'navbar_register',
    navbar_profile: 'navbar_profile',
    navbar_settings: 'navbar_settings',
    navbar_logout: 'navbar_logout'
}

URL_CHANGE = {
    url_change: 'url_change'
}