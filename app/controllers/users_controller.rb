class UsersController < ApplicationController
    # skip_before_action :authorized, only: :create
    def index
        render json: User.all
    end

    def create
        new_user = User.create!(new_user_params)
        session[:user_id] = new_user.id
        render json: new_user, status: :created
    end

    def show
       
        current_user = User.find(session[:user_id])
        render json: current_user
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
        params.permit(:username, :password, :password_confirmation, :user)
    end

    def all_users
        params.permit(:username, :flappy_bird_highscore, :asteroids_highscore, :speedtyper_highscore)
    end

end
