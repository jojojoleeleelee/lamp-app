class CreateEmotions < ActiveRecord::Migration[5.2]
  def change
    create_table :emotions do |t|
      t.string :name
      t.text :context

      t.timestamps
    end
  end
end
