class DropColumnFromCoaches < ActiveRecord::Migration
  def change
    remove_column :coaches, :cricket_team_id
  end
end
