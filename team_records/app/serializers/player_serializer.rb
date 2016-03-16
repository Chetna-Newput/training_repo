class PlayerSerializer < ActiveModel::Serializer
  attributes :id
  has_one :cricket_team_id
end
