require 'test_helper'

class DollarTest < ActiveSupport::TestCase
  test "it multiplies" do
    five = Dollar.new(:amount => 5)
    five.times(2)
    assert_equal 10, five.amount
  end
end
