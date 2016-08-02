require 'test_helper'

class DollarTest < ActiveSupport::TestCase
  test "it multiplies" do
    five = Dollar.new(5)
    # JUnit's assertEquals uses "equals"
    # MiniTest's assert_equal uses ==
    assert_equal Dollar.new(10), five.times(2)
    assert_equal Dollar.new(15), five.times(3)
  end
  
  test 'equality' do
    this = Dollar.new(5)
    that = Dollar.new(5)
    or_that = Dollar.new(6)
    assert this.equals(that)
    assert_not this.equals(or_that)
  end  
end
