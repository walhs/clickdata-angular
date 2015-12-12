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
        # puts "Clicks: #{user_clicks.size}"

        click_data_offset = report_register(user_clicks)
        # puts "Clicks offset: #{click_data_offset}"

        i = i + 1
    end
end

def report_register(user_clicks)
    puts ""
    puts "Tarefa 1 - Register"
    puts ""

    current_click = user_clicks[0]

    # loop até gatilho do inicio tarefa
    i = 0
    while current_click.gatilho != 'navbar_register' and i < user_clicks.size
        i = i + 1
        current_click = user_clicks[i]
    end
    navbar_register_click = current_click

    # Descarta evento url_change
    i = i + 2

    click_count = 0
    current_click = user_clicks[i]
    # loop até gatilho da próxima tarefa - Exibe Caminho do usuário
    while current_click.gatilho != 'url_change' and current_click.url != "http://localhost:9000/#/" and i < user_clicks.size
        case current_click.gatilho
        when "email_focus"
            puts "Usuário selecionou campo de email"
            next_gatilho = user_clicks[i+1].gatilho
            if next_gatilho == "email"
                # descarta o próximo gatilho, pois é "email"
                i = i + 1
            end

        when "username_focus"
            puts "Usuário selecionou campo de username"
            next_gatilho = user_clicks[i+1].gatilho
            if next_gatilho == "username"
                # descarta o próximo gatilho, pois é "username"
                i = i + 1
            end

        when "password_focus"
            puts "Usuário selecionou campo de senha"
            next_gatilho = user_clicks[i+1].gatilho
            if next_gatilho == "password"
                # descarta o próximo gatilho, pois é "password"
                i = i + 1
            end

        when "password_confirmation_focus"
            puts "Usuário selecionou campo de confirmação de senha"
            next_gatilho = user_clicks[i+1].gatilho
            if next_gatilho == "password_confirmation"
                # descarta o próximo gatilho, pois é "password_confirmation"
                i = i + 1
            end

        when "btn_submit_focus"
            puts "Usuário submeteu registro"
            next_gatilho = user_clicks[i+1].gatilho
            if next_gatilho == "btn_submit"
                # descarta o próximo gatilho, pois é "password_confirmation"
                i = i + 1
            end

        # -> não faz nada - Não preciso tratar porque o email_focus sempre é gerado
        when "email"
        when "password_confirmation"
        when "password"
        when "username"
        when "btn_submit"
            puts "GATILHO QUE DEVERIA SER DESCONSIDERADO"

        end

        i = i + 1
        click_count = click_count + 1
        current_click = user_clicks[i]
    end

    puts "Quantidade de clicks nessa tarefa: #{click_count}"

    url_change_event = current_click
    tempo_tarefa = url_change_event.created_at - navbar_register_click.created_at
    puts "Tempo de execução: #{tempo_tarefa.to_i} segundos"
    puts ""

    return i
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