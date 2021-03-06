class SessionsController < Devise::SessionsController
  respond_to :json

  def create
    resource = User.find_for_database_authentication(email: params[:user][:email])
    return invalid_login_attempt unless resource

    if resource.valid_password?(params[:user][:password])
      sign_in :user, resource
      render json: {}, status: :ok
    else
      invalid_login_attempt
    end
  end

protected

  def invalid_login_attempt
    render json: "Invalid Username or Password", status: 401
  end

end
