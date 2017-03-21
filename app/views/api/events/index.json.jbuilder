@events.each do |event|
    json.set! event.id do
      json.extract! event, :id, :title, :description, :data, :location, :image_url, :category_id, :group_id
    end
end
