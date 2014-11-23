class Audio < ActiveRecord::Base

  belongs_to :page
  belongs_to :person

  has_many :answer_audios
  has_many :answers, :through => :answer_audios

end
