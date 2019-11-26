json.extract! drawing, :id, :title, :description, :base64_png, :created_at, :updated_at
json.url drawing_url(drawing, format: :json)
