class Page < ActiveRecord::Base
    has_many :page_interviews
    has_many :interviews, :through => :page_interviews
end
