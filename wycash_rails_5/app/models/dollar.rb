class Dollar 
  include ActiveModel::Model
  # Super-clean Rails 5 syntax for a model without a DB table
  
  attr_accessor :amount
  
  def initialize(amount)
    self.amount = amount
  end    
  
  def times(multiplier)
    # self.amount *= multiplier
    result = self.amount * multiplier
    return Dollar.new(result)
  end  
  
  def equals(object)
    dollar = Dollar.new(object.amount)
    return (self.amount == dollar.amount)
  end  
  
  def ==(o)
    dollar = Dollar.new(o.amount)
    return (self.amount == dollar.amount)
  end
end