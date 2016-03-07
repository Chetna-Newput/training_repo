class TeamPlayersController < ApplicationController
  def listTeams
    @teams = CricketTeam.all
  end
  
  def listPlayers
    @team = CricketTeam.find(params[:id])
    @players= @team.players
  end
  
  def select
    @players = Player.all
  end
end
