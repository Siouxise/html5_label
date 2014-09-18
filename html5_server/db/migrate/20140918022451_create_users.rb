class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :password
      t.string :email
      t.integer :label_num
      t.string :bg_image

      t.timestamps
    end
  end
end
