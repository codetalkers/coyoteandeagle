class Answer < ActiveRecord::Base

  validates :answer, :question, :person, presence: true

  belongs_to :question
  belongs_to :person
  belongs_to :group

  has_many :answer_audios
  has_many :audios, :through => :answer_audios

  scope :beginning_answers, -> { where('group_id = 1') }
  scope :intermediate_answers, -> { where('group_id = 2') }
  scope :advanced_answers, -> { where('group_id = 3') }


end
