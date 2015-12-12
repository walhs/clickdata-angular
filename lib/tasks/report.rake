namespace :report do
  desc "Exige relatório de uso da plataforma"
  task usage: :environment do
    report_usage
    # analisa_create_post
  end

end

# só preciso saber o caminho que cada user fez por cada tarefa, o numero de cliques por tarefa/ user e
# o tempo por tarefa/user

# Ordem das tarefas:
# 1- cadastrar-se
# 2- adicionar um post
# 3- redefinir senha
# 4- apagar seu post
# 5- adicionar um novo post

def report_usage
    user_with_token = User.all
    i = 0
    while i < user_with_token.size
        user_token = user_with_token[i].tokens[0]
        user_clicks = user_token.click_datas
        puts "User id: #{user_with_token[i].id}"
        puts "Usuário: #{user_with_token[i].email}"
        puts "Token: #{user_token.token}"
        puts "Clicks: #{user_clicks.size}"
        puts ""
        i = i + 1
    end
end

def report_usage_2
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

# Profile
PROFILE = {
    delete_post: 'delete_post',
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