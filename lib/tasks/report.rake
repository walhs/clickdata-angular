namespace :report do
  desc "Exige relatório de uso da plataforma"
  task usage: :environment do
    report_usage
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

        click_data_offset = report(user_clicks, report_file, 0, 1)
        # puts "Clicks id: #{user_clicks[click_data_offset].id}"
        click_data_offset = report(user_clicks, report_file, click_data_offset, 2)
        # puts "Clicks id: #{user_clicks[click_data_offset].id}"
        click_data_offset = report(user_clicks, report_file, click_data_offset, 3)
        # puts "Clicks id: #{user_clicks[click_data_offset].id}"
        click_data_offset = report(user_clicks, report_file, click_data_offset, 4)
        # puts "Clicks id: #{user_clicks[click_data_offset].id}"
        click_data_offset = report(user_clicks, report_file, click_data_offset, 5)
        # puts "Clicks id: #{user_clicks[click_data_offset].id}"
        # click_data_offset = report(user_clicks, report_file, click_data_offset, 6)
        # click_data_offset = report_register(user_clicks, report_file)
        # click_data_offset = report_add_post(user_clicks, report_file, click_data_offset)
        # puts "Clicks offset: #{click_data_offset}"

        i = i + 1
    end

    report_file.close
end

def report(user_clicks, report_file, click_data_offset, tarefa)
    report_file.write("\nTarefa #{tarefa}\n")

    current_click = user_clicks[click_data_offset]
    first_click = current_click
    click_count = 0
    i = click_data_offset
    count_mouse_click_settings = 0
    sair = false

    # puts "Tarefa #{tarefa} - Id inicial: #{current_click.id}"

    # loop até gatilho da próxima tarefa - Exibe Caminho do usuário
    while i < user_clicks.size and sair == false

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

            sair = true

        # -> não faz nada - Não preciso tratar porque o email_focus sempre é gerado
        when "email"
        when "password_confirmation"
        when "password"
        when "username"
        # when "btn_submit"
            puts "GATILHO QUE DEVERIA SER DESCONSIDERADO - #{current_click.gatilho}"

        when "textarea"
            report_file.write("Usuário clicou no campo de texto do post\n")

        when "btn_submit"
            # se for pagina de settings e só tiver um mouse_click - printar password_confirmation
            if current_click.url == 'http://localhost:9000/#/settings'
                if count_mouse_click_settings == 1
                    # adicionando click na contagem
                    click_count = click_count + 1
                    report_file.write("Usuário clicou no confirmação de nova senha\n")
                end
            end

            report_file.write("Usuário submeteu dado\n")
            sair = true

        when "mouse-click"
            # se for em setting - considero que é um dos campos de settings
            # else - é um click perdido
            if current_click.url == 'http://localhost:9000/#/settings'
                count_mouse_click_settings =  count_mouse_click_settings + 1
                if count_mouse_click_settings == 1
                    report_file.write("Usuário clicou no novo senha\n")
                elsif count_mouse_click_settings == 2
                    report_file.write("Usuário clicou no confirmação de nova senha\n")
                else
                    report_file.write("Usuário clicou em um lugar sem gatilho - #{current_click.url}\n")
                end
            else
                report_file.write("Usuário clicou em um lugar sem gatilho - #{current_click.url}\n")
            end

        when "navbar_settings"
            count_mouse_click_settings =  0
            report_file.write("Usuário clicou em settings\n")

        when "navbar_profile"
            report_file.write("Usuário clicou em profile\n")

        when "navbar_tracker"
            report_file.write("Usuário clicou em tracker\n")

        when "navbar_home"
            report_file.write("Usuário clicou em home\n")

        when "navbar_login"
            report_file.write("Usuário clicou em Login\n")

        when "navbar_register"
            report_file.write("Usuário clicou em register\n")

        when "navbar_logout"
            report_file.write("Usuário clicou em logout\n")
            i = i -1
            sair = true

        when "btn_addPost"
            report_file.write("Usuário clicou em adicionar post\n")

        when "url_change"
            # ajuste para ignorar o url_change como click do usuário
            click_count = click_count - 1

        when "delete_post"
            report_file.write("Usuário deletou post\n")
            sair = true
        else
            puts "Gatilho muito loko #{current_click.gatilho}"
        end

        i = i + 1
        click_count = click_count + 1
        current_click = user_clicks[i]
    end

    # puts "Tarefa #{tarefa} - Id Final: #{current_click.id}"

    report_file.write("Quantidade de clicks nessa tarefa: #{click_count}\n")

    tempo_tarefa = current_click.created_at - first_click.created_at
    report_file.write("Tempo de execução: #{tempo_tarefa.to_i} segundos\n\n")

    return i
end