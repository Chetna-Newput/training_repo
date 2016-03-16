module PlayerHelper
  def teamlist
    teamlist=[] 
    CricketTeam.all.each {|t| teamlist << [ t.team_name, t.id ]}
    teamlist
  end
  
  def teamname(team_id)
    team = CricketTeam.find(team_id)
    team.team_name
  end
end
