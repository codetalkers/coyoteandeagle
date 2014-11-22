class Answer < ActiveRecord::Base

  validates :answer, :question, :person, presence: true

  belongs_to :question
  belongs_to :person
  belongs_to :group

  has_many :answer_audios
  has_many :audios, :through => :answer_audios


end
