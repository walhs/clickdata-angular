require "rails_helper"

RSpec.describe ClickDataController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/click_data").to route_to("click_data#index")
    end

    it "routes to #new" do
      expect(:get => "/click_data/new").to route_to("click_data#new")
    end

    it "routes to #show" do
      expect(:get => "/click_data/1").to route_to("click_data#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/click_data/1/edit").to route_to("click_data#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/click_data").to route_to("click_data#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/click_data/1").to route_to("click_data#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/click_data/1").to route_to("click_data#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/click_data/1").to route_to("click_data#destroy", :id => "1")
    end

  end
end
