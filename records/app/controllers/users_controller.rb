class UsersController < ApplicationController

  def home
  end
  
  def index
    @users = User.all
  end
  
  def show
    @user = User.find(params[:id])
  end
  
  def create
    @user = User.new(user_params)
 
    if @user.save
      redirect_to users_path
    else
      render 'new'
    end
  end
  
  def new
    @user = User.new
  end 
  
  def edit
    @user = User.find(params[:id])
  end
  
  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      redirect_to users_path
    else
      render 'edit'
    end
  end
  
  def developers
    @users = User.where("role = ?", "developer")
    render 'index'
  end
  
  def editDevelopers
    @user = User.find(params[:id])
    if @user.role=='developer'
      render 'edit'
    else
      redirect_to error_path 
    end
  end
  
  def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to users_path
  end
  
  
private
  def user_params
    params.require(:user).permit(:name, :age, :role)
  end


end
