class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :player_id
      t.string :player_name
      t.integer :player_age
      t.string :player_email

      t.timestamps null: false
    end
  end
end
