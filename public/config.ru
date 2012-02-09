require 'rack'

use Rack::Static, :urls => ["/stylesheets", "/images"], :root => "public"
run lambda { |env| [200, { 'Content-Type' => 'text/html', 'Cache-Control