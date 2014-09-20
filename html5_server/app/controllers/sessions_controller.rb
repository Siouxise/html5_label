class SessionsController < ApplicationController
  def new

  end
  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      # Sign the user in and redirect to the user's show page.
      user_sign_in user
      redirect_to labels_path
    else
      redirect_to new_session_path
      # Create an error message and re-render the signin form.
    end
  end
  def destory

  end
end
