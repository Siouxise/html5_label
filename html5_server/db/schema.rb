# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140918024112) do

  create_table "admins", force: true do |t|
    t.string   "name"
    t.string   "password"
    t.string   "email"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "labels", force: true do |t|
    t.integer  "user_id"
    t.text     "content"
    t.string   "bg_image"
    t.string   "bg_color"
    t.string   "text_color"
    t.float    "opacity",    limit: 24
    t.string   "rotate"
    t.integer  "z_index"
    t.string   "left"
    t.string   "top"
    t.boolean  "is_del"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "name"
    t.string   "password"
    t.string   "email"
    t.integer  "label_num"
    t.string   "bg_image"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
