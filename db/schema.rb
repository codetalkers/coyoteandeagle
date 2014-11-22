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

ActiveRecord::Schema.define(version: 20141122172112) do

  create_table "answer_media", force: true do |t|
    t.integer "answer_id", null: false
    t.integer "media_id",  null: false
  end

  create_table "answers", force: true do |t|
    t.integer "question_id", default: 0
    t.text    "answer"
    t.integer "person_id",   default: 0
    t.integer "group_id",    default: 0
  end

  create_table "groups", force: true do |t|
    t.string "name", limit: 25, null: false
  end

  create_table "interviews", id: false, force: true do |t|
    t.integer  "id",                            null: false
    t.string   "name",                          null: false
    t.integer  "person_id",         default: 0
    t.datetime "date_of_interview"
  end

  create_table "media", force: true do |t|
    t.string  "name",      limit: 50,             null: false
    t.integer "person_id",            default: 0
    t.string  "path"
  end

  create_table "page_interviews", force: true do |t|
    t.integer "page_id",      null: false
    t.integer "interview_id", null: false
  end

  create_table "pages", force: true do |t|
    t.string "name",             limit: 50
    t.text   "description"
    t.string "background_image", limit: 50
    t.string "background_color", limit: 10
  end

  create_table "people", force: true do |t|
    t.string  "name",      limit: 50
    t.string  "last_name", limit: 50
    t.string  "email",     limit: 50
    t.string  "phone",     limit: 25
    t.string  "website",   limit: 50
    t.string  "twitter",   limit: 25
    t.integer "tribe_id",             default: 0
  end

  create_table "questions", force: true do |t|
    t.string  "name",           limit: 1000,             null: false
    t.integer "question_order",              default: 0
    t.integer "interview_id",                default: 0
  end

  create_table "users", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
