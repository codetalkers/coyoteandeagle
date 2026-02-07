class AnswerAudio < ActiveRecord::Base

  belongs_to :answer
  belongs_to :audio

end
