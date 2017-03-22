  json.events do
    @events.each do |event|
      json.set! event.id do
          json.extract! event, :id, :title, :description, :data, :location, :image_url, :category_id, :group_id
      end
    end
  end

  json.groups do
    @groups.each do |group|
      json.set! group.id do
        json.extract! group, :name, :description, :author_id, :image_url, :category_id
      end
    end
  end
