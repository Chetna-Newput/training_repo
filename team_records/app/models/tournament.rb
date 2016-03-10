class Tournament < ActiveRecord::Base
  has_and_belongs_to_many :cricket_teams
end
