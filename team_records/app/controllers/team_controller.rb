class TeamController < ApplicationController
  protect_from_forgery except: [:index, :show, :listPlayers]
  def home
  end
  
  def index
    @teams = CricketTeam.all
    respond_to do |format|
      format.html 
      format.json { render :json => @teams}
      format.js 
    end
  end
  
  def show
    @team = CricketTeam.find(params[:id])
    respond_to do |format|
      format.html 
      format.json { render :json => @team}
      format.js 
    end
  end
  
  def create
    @team = CricketTeam.new(team_params)
 
    if @team.save
      respond_to do |format|
        format.html 
        format.json { render :json => @team}
        format.js {}
        redirect_to cricket_teams_path
      end
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
       respond_to do |format|
        format.html 
        format.json { render :json => @team}
        format.js {}
        redirect_to cricket_teams_path
      end
    else
      render 'edit'
    end
  end
  
 def destroy
    @team = CricketTeam.find(params[:id])
    @team.destroy
    redirect_to action: 'index', status: 303
  end
  
  def listPlayers
    @team = CricketTeam.find(params[:id])
    @players= @team.players
    respond_to do |format|
      format.html 
      format.json { render :json => @players}
      format.js 
    end
  end
  
private
  def team_params
    params.require(:cricket_team).permit(:team_name)
  end

end
