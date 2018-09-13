require 'test_helper'

class PrayersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @prayer = prayers(:one)
  end

  test "should get index" do
    get prayers_url, as: :json
    assert_response :success
  end

  test "should create prayer" do
    assert_difference('Prayer.count') do
      post prayers_url, params: { prayer: { context: @prayer.context, duration: @prayer.duration, focus: @prayer.focus } }, as: :json
    end

    assert_response 201
  end

  test "should show prayer" do
    get prayer_url(@prayer), as: :json
    assert_response :success
  end

  test "should update prayer" do
    patch prayer_url(@prayer), params: { prayer: { context: @prayer.context, duration: @prayer.duration, focus: @prayer.focus } }, as: :json
    assert_response 200
  end

  test "should destroy prayer" do
    assert_difference('Prayer.count', -1) do
      delete prayer_url(@prayer), as: :json
    end

    assert_response 204
  end
end
