class Franc < Money
  include ActiveModel::Model
  # Super-clean Rails 5 syntax for a model without a DB table
  
  def times(multiplier)
    # self.amount *= multiplier
    result = self.amount * multiplier
    return Franc.new(result)
  end  
  
end