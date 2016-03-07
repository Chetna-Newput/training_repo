class User < ActiveRecord::Base
  validates :name, presence: true,
    length: {minimum: 5}
  validates :age, allow_blank: true,
  numericality: {only_integer: true, greater_than: 18}
  validates :role, inclusion: { in: %w(developer qa),
    message: "%{value} is not a valid role" }
end
