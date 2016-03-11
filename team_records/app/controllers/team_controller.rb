class TeamController < ApplicationController
  def home
  end
  
  def index
    @teams = CricketTeam.all
  end
  
  def show
    @team = CricketTeam.find(params[:id])
  end
  
  def create
    @team = CricketTeam.new(team_params)
 
    if @team.save
      redirect_to cricket_teams_path
    else
      render 'new'
    end
  end
  
  def new
    @team = CricketTeam.new
  end 
  
  def edit
    @team = CricketTeam.find(params[:id])
  end
  
  def update
    @team = CricketTeam.find(params[:id])
    if @team.update(team_params)
      redirect_to cricket_teams_path
    else
      render 'edit'
    end
  end
  
 def destroy
    @team = CricketTeam.find(params[:id])
    @team.destroy
    redirect_to cricket_teams_path
  end
  
  def listPlayers
    @team = CricketTeam.find(params[:id])
    @players= @team.players
  end
  
private
  def team_params
    params.require(:cricket_team).permit(:team_name)
  end

end
