require 'rails_helper'

RSpec.describe "ClickData", type: :request do
  describe "GET /click_data" do
    it "works! (now write some real specs)" do
      get click_data_path
      expect(response).to have_http_status(200)
    end
  end
end
