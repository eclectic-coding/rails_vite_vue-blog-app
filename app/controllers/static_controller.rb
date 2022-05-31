class StaticController < ApplicationController
  def home
    render inertia: 'Home', props: {}
  end
end
