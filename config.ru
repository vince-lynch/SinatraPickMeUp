=begin
require 'rubygems'
require 'bundler'
Bundler.require



run Sinatra::Application


=end

require 'rubygems'
require 'bundler'

Bundler.require

require File.expand_path 'app.rb', File.dirname(__FILE__)
run App
