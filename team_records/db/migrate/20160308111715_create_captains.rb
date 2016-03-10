class CreateCaptains < ActiveRecord::Migration
  def change
    create_table :captains do |t|
      t.string :captain_name
      t.integer :cricket_team_id
      t.string :speciality

      t.timestamps null: false
    end
  end
end
