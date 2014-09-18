json.array!(@labels) do |label|
  json.extract! label, :id, :user_id, :content, :bg_image, :bg_color, :text_color, :opacity, :rotate, :z_index, :left, :top, :is_del
  json.url label_url(label, format: :json)
end
