module PlayerHelper
  def teamlist
    @teamlist=[] 
    CricketTeam.all.each {|t| @teamlist.push([ t.team_name, t.id ])}
    return @teamlist
  end
  
  def teamname(team_id)
    team = CricketTeam.find(team_id)
    return team.team_name
  end
end
