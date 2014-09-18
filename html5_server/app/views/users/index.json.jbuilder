json.array!(@users) do |user|
  json.extract! user, :id, :name, :password, :email, :label_num, :bg_image
  json.url user_url(user, format: :json)
end
