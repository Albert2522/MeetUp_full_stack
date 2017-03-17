@events.each do |event|
  json.set! event.id do
    json.extract! event, :title, :description, :data, :location, :image_url, :category_id
  end
end
