class Engineer < ActiveRecord::Base
  validates :name, presence: true,
  length: {maximum: 512}
  validates :age, presence: true
  validates :role, presence: true
end
