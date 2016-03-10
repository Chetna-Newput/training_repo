class IplHistory < ActiveRecord::Base
  belongs_to :player
  belongs_to :ipl_team
end
