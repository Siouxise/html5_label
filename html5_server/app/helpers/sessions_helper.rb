module SessionsHelper

  # controller  create
  def user_sign_in(user)
    remember_token = User.new_remember_token
    cookies.permanent[:remember_token] = remember_token
    user.update_attribute(:remember_token, User.hash(remember_token))
    self.current_user = user

  end

  def current_user=(user)
    @current_user = user
  end

  # this is not in use
=begin
  def redirect_back_or(user)
    redirect_to(session[:return_to] || user)
    session.delete(:return_to)
  end
=end

  #destroy
  def user_sign_out
    # if it is nil it will wrong in this line
    if current_user!=nil
      current_user.update_attribute(:remember_token, User.hash(User.new_remember_token))
    end
    self.current_user =nil
    cookies.delete(:remember_token)
  end

  # before action in use
  def user_signed_in?
    !current_user.nil?
  end

  def current_user
    remember_token = User.hash(cookies[:remember_token])
    @current_user ||= User.find_by(remember_token: remember_token)
  end

  def current_user?(user)
    user == current_user
  end

  def store_location_stu
    session[:return_to] = request.fullpath if request.get?
  end

  def return_user
    @current_user
  end


end
