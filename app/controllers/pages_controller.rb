class PagesController < ApplicationController
  def home; end

  def pathfindout; end

  def source
    redirect_to 'https://github.com/Deanout/turbopath'
  end
end
