class UsersController < ApplicationController

    def index
        render json: User.all
    end

    def create
        new_user = User.create!(new_user_params)
        render json: new_user, status: :created
    end

    def show
        render json: User.find(params[:id])
    end

    def update
        new_score =  User.find(params[:id])
        new_score.update!(score_update_params)
    end


    private 

    def score_update_params
        params.permit(:flappy_bird_highscore, :asteroids_highscore, :speedtyper_highscore)
    end

    def new_user_params
        params.permit(:username, :password_digest, :user)
    end

    def all_users
        params.permit(:username, :flappy_bird_highscore, :asteroids_highscore, :speedtyper_highscore)
    end

end
