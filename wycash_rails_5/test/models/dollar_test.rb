require 'test_helper'

class DollarTest < ActiveSupport::TestCase
  test "it multiplies" do
    five = Dollar.new(:amount => 5)
    product = five.times(2)
    assert_equal 10, product.amount
    product = five.times(3)
    assert_equal 15, product.amount
  end
end
