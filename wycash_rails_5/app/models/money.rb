class Money
  include ActiveModel::Model
  # Super-clean Rails 5 syntax for a model without a DB table

  attr_accessor :amount
  
  def initialize(amount)
    self.amount = amount
  end    
  
  def Money.dollar(amount)
    return Dollar.new(amount)
  end
  
  def Money.franc(amount)
    return Franc.new(amount)
  end  
  
  def equals(object)
    # money = Money.new(object.amount)
    money = object if object.class < Money
    return (self.amount == money.amount) && (self.class.name == money.class.name)
  end  
  
  def ==(o)
    # money = Money.new(o.amount)
    money = o if o.class < Money
    return (self.amount == money.amount) && (self.class.name == money.class.name)
  end
end