class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :text
      t.string :username

      t.timestamps null: false
    end
  end
end
