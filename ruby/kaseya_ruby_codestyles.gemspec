# frozen_string_literal: true

require File.expand_path('ci/kaseya_ruby_codestyles/version', __dir__)

Gem::Specification.new do |spec|
  spec.name = 'Kaseya_Ruby_Codestyles'
  spec.version = CI::VERSION
  spec.authors = ['Spanning Team']
  spec.license = 'Apache'
  spec.platform = Gem::Platform::RUBY

  spec.required_ruby_version = '>= 2.4.0'

  spec.summary  = 'Kaseya Ruby style guides and shared style configs.'
  spec.homepage = 'https://github.com/SpanningCloudsApps/codestyle'

  spec.files = Dir['README.md', 'LICENSE',
                   'CHANGELOG.md', 'ci/**/*.rb',
                   'ci/**/*.rake',
                   'kaseya_ruby_codestyles.gemspec', '.github/*.md',
                   'Gemfile', 'Rakefile']

  spec.extra_rdoc_files = ['README.md']

  spec.add_dependency 'rubocop', '~> 1.28.2'
  spec.add_dependency 'rubocop-performance', '~> 1.13.3'
  spec.add_dependency 'rubocop-rails', '~> 2.14'
  spec.add_dependency 'rubocop-rake', '~> 0.6'
  spec.add_dependency 'rubocop-rspec', '~> 2.10'
  spec.add_dependency 'rubocop-thread_safety', '~> 0.4'
  spec.add_development_dependency 'bundler', '~> 2.3.22'
  spec.add_development_dependency 'rake', '~> 13.0'

  spec.metadata = {
    'rubygems_mfa_required' => 'true'
  }
end
