class PagesController < ApplicationController
  def about
    @works = Work.all
  end

  def gallery
    @works = Work.all
  end

  def price
  end

  def contacts
  end
end
