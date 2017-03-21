@groups.each do |group|
    json.set! group.id do
      json.extract! group, :name, :description, :author_id, :image_url, :category_id
    end
end
