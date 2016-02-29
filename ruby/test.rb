#!/usr/bin/ruby -w

puts "Hello, anju!";

BEGIN {
  puts "Begin block"    
}

END {
  puts "End block"
}

class MyClass 
  @@count=0;
  def initialize(id, name, addr)
    @id = id
    @name= name
    @addr= addr
  end
  def print()
    puts "My id is #@id"
    puts "My name is #@name"
    puts "My address is#@addr"
  end
end

myClass1 = MyClass.new("1","Chetna", "my Address")
myClass1.print()