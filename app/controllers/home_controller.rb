class HomeController < ApplicationController

  def index
    @beginning_answers = Answer.beginning_answers
  end

end
