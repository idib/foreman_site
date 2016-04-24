class AddInspected < ActiveRecord::Migration
  def change
    add_column :messages, :inspected, :boolean
  end
end
