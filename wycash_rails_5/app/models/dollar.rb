class Dollar < Money
  include ActiveModel::Model
  # Super-clean Rails 5 syntax for a model without a DB table
  
  def times(multiplier)
    # self.amount *= multiplier
    result = self.amount * multiplier
    return Dollar.new(result)
  end  
  
end