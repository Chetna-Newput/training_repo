class CoachesCricketTeam < ActiveRecord::Base
  belongs_to :cricket_team
  has_one :coach
end
