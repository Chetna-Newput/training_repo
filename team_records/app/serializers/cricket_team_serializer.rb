class CricketTeamSerializer < ActiveModel::Serializer
  attributes :team_name
  has_many :players
  
end
