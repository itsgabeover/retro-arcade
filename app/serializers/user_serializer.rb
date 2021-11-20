class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :flappy_bird_highscore, :asteroids_highscore, :speedtyper_highscore
end
