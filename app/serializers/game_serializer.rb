class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :rules
end
