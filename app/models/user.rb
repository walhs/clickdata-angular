class User < ActiveRecord::Base
    has_many :posts
    has_many :tokens
    # Include default devise modules. Others available are:
    # :confirmable, :lockable, :timeoutable and :omniauthable
    devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

    def as_json(options = {})
        super(options.merge(include: :posts))
    end
end
