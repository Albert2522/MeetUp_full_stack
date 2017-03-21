class Api::UsersController < ApplicationController

def create
	@user = User.new(user_params)
	if @user.save
		login(@user)
		render "api/users/show"
	else
		render json: @user.errors.full_messages, status: 422
	end
end

def show
	@user = User.find_by_id(params[:id])
	render "api/users/show"
end

def update
	@user = User.find_by_id(user_params[:id])
	unless @user.password_is?(user_params[:old_password])
		render json: ["Initial password is incorrect"], status: 422
		return
	end
	renew_params = {email: user_params[:email], password: user_params[:password]}
	if @user.update(renew_params)
		render json: ["Password is succesfully changed. You can continue session or refresh page and login with new password"], status: 422
	else
		render json: @user.errors.full_messages, status: 422
	end
end

private

def user_params
	params.require(:user).permit(:email, :password, :old_password, :id)
end

end
