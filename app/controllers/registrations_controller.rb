class RegistrationsController < Devise::RegistrationsController
  respond_to :json

  def create
    resource = User.create(user_params)
    if resource.save
      sign_in :user, resource
      render json: {}, status: :ok
    else
      render json: humanize_errors(resource), status: 400
    end
  end

protected

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end

  def humanize_errors(obj)
    obj.errors.messages.collect { |k, v| "#{k.to_s.humanize} #{v.to_sentence}"}.join
  end
end
