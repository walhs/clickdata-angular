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
    report_file = File.new("report.txt", "w")
    user_with_token = User.all
    i = 0
    while i < user_with_token.size
        user_token = user_with_token[i].tokens[0]
        user_clicks = user_token.click_datas
        report_file.write("User id: #{user_with_token[i].id}\n")
        report_file.write("Usuário: #{user_with_token[i].email}\n")
        report_file.write("Token: #{user_token.token}\n")
        # puts "Clicks: #{user_clicks.size}"

        click_data_offset = report_register(user_clicks, report_file)
        click_data_offset = report_add_post(user_clicks, report_file, click_data_offset)
        # puts "Clicks offset: #{click_data_offset}"

        i = i + 1
    end

    report_file.close
end

def report_register(user_clicks, report_file)
    report_file.write("\nTarefa 1 - Register\n")

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
            report_file.write("Usuário selecionou campo de email\n")
            next_gatilho = user_clicks[i+1].gatilho
            if next_gatilho == "email"
                # descarta o próximo gatilho, pois é "email"
                i = i + 1
            end

        when "username_focus"
            report_file.write("Usuário selecionou campo de username\n")
            next_gatilho = user_clicks[i+1].gatilho
            if next_gatilho == "username"
                # descarta o próximo gatilho, pois é "username"
                i = i + 1
            end

        when "password_focus"
            report_file.write("Usuário selecionou campo de senha\n")
            next_gatilho = user_clicks[i+1].gatilho
            if next_gatilho == "password"
                # descarta o próximo gatilho, pois é "password"
                i = i + 1
            end

        when "password_confirmation_focus"
            report_file.write("Usuário selecionou campo de confirmação de senha\n")
            next_gatilho = user_clicks[i+1].gatilho
            if next_gatilho == "password_confirmation"
                # descarta o próximo gatilho, pois é "password_confirmation"
                i = i + 1
            end

        when "btn_submit_focus"
            report_file.write("Usuário submeteu registro\n")
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

    report_file.write("Quantidade de clicks nessa tarefa: #{click_count}\n")

    url_change_event = current_click
    tempo_tarefa = url_change_event.created_at - navbar_register_click.created_at
    report_file.write("Tempo de execução: #{tempo_tarefa.to_i} segundos\n\n")

    return i
end

def report_add_post(user_clicks, report_file, click_data_offset)
    report_file.write("\nTarefa 2 - Adicionar post\n")

    current_click = user_clicks[click_data_offset]

    # loop até gatilho do inicio tarefa
    i = click_data_offset
    while current_click.gatilho != 'btn_addPost' and i < user_clicks.size
        i = i + 1
        current_click = user_clicks[i]
    end
    btn_addPost_click = current_click

    # Descarta evento url_change
    i = i + 2

    click_count = 0
    current_click = user_clicks[i]
    # loop até gatilho da próxima tarefa - Exibe Caminho do usuário
    while current_click.gatilho != 'url_change' and current_click.url != "http://localhost:9000/#/" and i < user_clicks.size
        case current_click.gatilho
        when "textarea"
            report_file.write("Usuário clicou no campo de texto do post\n")

        when "btn_submit"
            report_file.write("Usuário submeteu novo post\n")
        end

        i = i + 1
        click_count = click_count + 1
        current_click = user_clicks[i]
    end

    report_file.write("Quantidade de clicks nessa tarefa: #{click_count}\n")

    url_change_event = current_click
    tempo_tarefa = url_change_event.created_at - btn_addPost_click.created_at
    report_file.write("Tempo de execução: #{tempo_tarefa.to_i} segundos\n\n")

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