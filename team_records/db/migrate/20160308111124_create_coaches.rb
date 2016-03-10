class CreateCoaches < ActiveRecord::Migration
  def change
    create_table :coaches do |t|
      t.string :coach_name
      t.string :nationality
      t.integer :cricket_team_id

      t.timestamps null: false
    end
  end
end
