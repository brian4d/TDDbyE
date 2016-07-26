require 'test_helper'

class DollarTest < ActiveSupport::TestCase
  test "it multiplies" do
    five = Dollar.new(:amount => 5)
    product = five.times(2)
    assert_equal 10, product.amount
    product = five.times(3)
    assert_equal 15, product.amount
  end
  
  test 'equality' do
    this = Dollar.new(:amount => 5)
    that = Dollar.new(:amount => 5)
    or_that = Dollar.new(:amount => 6)
    assert this.equals(that)
    assert_not this.equals(or_that)
  end  
end
