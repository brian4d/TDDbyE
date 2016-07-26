class Dollar 
  include ActiveModel::Model
  # Super-clean Rails 5 syntax for a model without a DB table
  
  attr_accessor :amount

  def times(multiplier)
    # self.amount *= multiplier
    result = amount * multiplier
    return Dollar.new(:amount => result)
  end  
end
