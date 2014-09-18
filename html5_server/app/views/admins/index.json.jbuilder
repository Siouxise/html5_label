json.array!(@admins) do |admin|
  json.extract! admin, :id, :name, :password, :email
  json.url admin_url(admin, format: :json)
end
