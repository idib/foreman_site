require 'rails_helper'

describe Message do
  it { should validate_presence_of :text }
  it { should validate_presence_of :username }
end