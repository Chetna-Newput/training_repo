class EngineersController < ApplicationController
  def home
  end
  
  def index
    @engineers = Engineer.all
  end
  
  def show
    @engineer = Engineer.find(params[:id])
  end
  
  def create
    @engineer = Engineer.new(engineer_params)
 
    if @engineer.save
      redirect_to engineers_path
    else
      render 'new'
    end
  end
  
  def new
    @engineer = Engineer.new
  end 
  
  def edit
    @engineer = Engineer.find(params[:id])
  end
  
  def update
    @engineer = Engineer.find(params[:id])
    if @engineer.update(engineer_params)
      redirect_to engineers_path
    else
      render 'edit'
    end
  end
  
  def developers
    @engineers = Engineer.where("role = ?", "developer")
    render 'index'
  end
  
  def editDevelopers
    @engineer = Engineer.find(params[:id])
    if @engineer.role=='developer'
        render 'edit'
    else
      redirect_to error_path 
    end
  end
  
  def destroy
    @engineer = Engineer.find(params[:id])
    @engineer.destroy
    redirect_to engineers_path
  end
  
  
private
  def engineer_params
    params.require(:engineer).permit(:name, :age, :role)
  end
end
