class HomeController < ApplicationController

  def index
    @beginning_answers = Answer.beginning_answers
    @intermediate_answers = Answer.intermediate_answers
    @advanced_answers = Answer.advanced_answers
    #@search = Twitter.search("coyoteandeagle")
  end

end
