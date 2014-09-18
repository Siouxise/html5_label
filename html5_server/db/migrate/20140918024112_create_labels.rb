class CreateLabels < ActiveRecord::Migration
  def change
    create_table :labels do |t|
      t.integer :user_id
      t.text :content
      t.string :bg_image
      t.string :bg_color
      t.string :text_color
      t.float :opacity
      t.string :rotate
      t.integer :z_index
      t.string :left
      t.string :top
      t.boolean :is_del

      t.timestamps
    end
  end
end
