class PlayerController < ApplicationController
  def index
    @players = Player.all
  end
  
  def show
    @player = Player.find(params[:id])
  end
  
  def create
    @player = Player.new(player_params)
 
    if @player.save
      redirect_to team_players_list_path(@player.cricket_team_id)
    else
      render 'new'
    end
  end
  
  def new
    @player = Player.new
  end 
  
  def edit
    @player = Player.find(params[:id])
  end
  
  def update
    @player = Player.find(params[:id])
    if @player.update(player_params)
      redirect_to team_players_list_path(@player.cricket_team_id)
    else
      render 'edit'
    end
  end
  
  def destroy
    @player = Player.find(params[:id])
    @player.destroy
    redirect_to players_path
  end
 
  private
  def player_params
    params.require(:player).permit(:player_name, :player_age, :player_email, :player_email_confirmation, :cricket_team_id)
  end
end
