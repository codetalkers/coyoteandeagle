class Person < ActiveRecord::Base

  belongs_to :page
  belongs_to :tribe

end
