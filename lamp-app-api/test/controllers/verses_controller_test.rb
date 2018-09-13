require 'test_helper'

class VersesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @verse = verses(:one)
  end

  test "should get index" do
    get verses_url, as: :json
    assert_response :success
  end

  test "should create verse" do
    assert_difference('Verse.count') do
      post verses_url, params: { verse: { book: @verse.book, memorized: @verse.memorized, verse: @verse.verse } }, as: :json
    end

    assert_response 201
  end

  test "should show verse" do
    get verse_url(@verse), as: :json
    assert_response :success
  end

  test "should update verse" do
    patch verse_url(@verse), params: { verse: { book: @verse.book, memorized: @verse.memorized, verse: @verse.verse } }, as: :json
    assert_response 200
  end

  test "should destroy verse" do
    assert_difference('Verse.count', -1) do
      delete verse_url(@verse), as: :json
    end

    assert_response 204
  end
end
