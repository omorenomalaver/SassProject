module Sass::Script::Functions
	def timestamp()
		#target => "By Oscar Moreno"
		#return target
		return Sass::Script::String.new(Time.now.to_s)
	end
end