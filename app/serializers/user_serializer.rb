class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :flappy_bird_highscore, :asteroids_highscore, :speedtyper_highscore
end
