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

ActiveRecord::Schema.define(version: 2019_12_23_020605) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "audio_quiz_answers", force: :cascade do |t|
    t.string "who"
    t.string "called"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "click_scores", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "score"
    t.string "name"
  end

  create_table "drawings", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.text "base64_png"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "friendly_id_slugs", force: :cascade do |t|
    t.string "slug", null: false
    t.integer "sluggable_id", null: false
    t.string "sluggable_type", limit: 50
    t.string "scope"
    t.datetime "created_at"
    t.index ["slug", "sluggable_type", "scope"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type_and_scope", unique: true
    t.index ["slug", "sluggable_type"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type"
    t.index ["sluggable_type", "sluggable_id"], name: "index_friendly_id_slugs_on_sluggable_type_and_sluggable_id"
  end

  create_table "pub_quiz_answers", force: :cascade do |t|
    t.string "teamname"
    t.string "q1answer"
    t.string "q2answer"
    t.string "q3answer"
    t.string "q4answer"
    t.string "q5answer"
    t.string "q6answer"
    t.string "q7answer"
    t.string "q8answer"
    t.string "q9answer"
    t.string "q10answer"
    t.string "q11answer"
    t.string "q12answer"
    t.string "q13answer"
    t.string "q14answer"
    t.string "q15answer"
    t.string "q16answer"
    t.string "q17answer"
    t.string "q18answer"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "whatsapp_stats", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "phrase"
    t.integer "hugo_frequency"
    t.integer "sarah_frequency"
    t.string "months_frequency"
    t.string "hugo_months_frequency"
    t.string "sarah_months_frequency"
    t.string "slug"
    t.index ["slug"], name: "index_whatsapp_stats_on_slug", unique: true
  end

end
