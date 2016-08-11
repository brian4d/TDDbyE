require 'test_helper'

class DollarTest < ActiveSupport::TestCase
  test "it multiplies dollars" do
    # five = Dollar.new(5)
    five = Money.dollar(5)
    
    # JUnit's assertEquals uses "equals"
    # MiniTest's assert_equal uses ==
    assert_equal Money.dollar(10), five.times(2)
    assert_equal Money.dollar(15), five.times(3)
  end
  
  test "it multiplies francs" do
    five = Money.franc(5)
    # JUnit's assertEquals uses "equals"
    # MiniTest's assert_equal uses ==
    assert_equal Money.franc(10), five.times(2)
    assert_equal Money.franc(15), five.times(3)
  end
  
  test 'equality' do
    this_dollar = Money.dollar(5)
    that_dollar = Money.dollar(5)
    or_that_dollar = Money.dollar(6)
    assert this_dollar.equals(that_dollar)
    assert_not this_dollar.equals(or_that_dollar)

    this_franc = Money.franc(5)
    that_franc = Money.franc(5)
    or_that_franc = Money.franc(6)
    assert this_franc.equals(that_franc)
    assert_not this_franc.equals(or_that_franc)
    
    assert_not this_dollar==this_franc
  end  

end
