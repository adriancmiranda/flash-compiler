![Flash Compiler](https://raw2.github.com/adriancmiranda/flash-compiler/master/examples/desktop/html/source/application/images/flash-compiler.png "Flash Compiler")
=====

![Grunt](https://raw2.github.com/adriancmiranda/flash-compiler/master/examples/desktop/html/source/application/images/bullet-grunt.gif "Grunt")

[Grunt](http://gruntjs.com/) is used to build, preview and test your project.

![Bower](https://raw2.github.com/adriancmiranda/flash-compiler/master/examples/desktop/html/source/application/images/bullet-bower.gif "Bower")

[Bower](http://bower.io/) is used for dependency management.

![Apache Flex SDK](https://raw2.github.com/adriancmiranda/flash-compiler/master/examples/desktop/html/source/application/images/bullet-flex.png "Apache Flex SDK")

[Apache Flex SDK](http://flex.apache.org/) is used for build binary files.

![iOS SDK](https://raw2.github.com/adriancmiranda/flash-compiler/master/examples/desktop/html/source/application/images/bullet-ios.png "iOS SDK")

[iOS SDK](https://developer.apple.com/devcenter/ios/index.action) is used for build ipa binary files.

Usage
=====

    sh build [package] [mode] [options]

or

    chmod +x build && ./build -help

or

    double-click on it

### [package]

        -swf (✓ Default: ShockWave Flash)
        -dmg (✓ Apple disk images)
        -app (✖ Application bundle)
        -apk (✖ Android application package file)
        -ipa (✖ iOS application) 
        -air (✓ Adobe Integrated Runtime)
        -exe (✖ Windows Executable file)
        -rem (✖ Blackberry Desktop Manager / Blackberry devices)

### [mode]

        -debug (✓ Default: Methodical process of finding and reducing the number of bugs, or defects)
        -release (✓ The public distribution of software code and support materials)

### [options]

        -preview (✓ Opens compiled project)
        -server (✓ Compiles and opens localhost environment)
        -launch (✓ Opens localhost environment)
        -hml (✓ Opens homologation environment)
        -dev (✓ Opens staging environment)

Helpfull
========
[AIR - Building Apps](http://help.adobe.com/en_US/air/build/air_buildingapps.pdf)

Warning
=======
Flash compiler is currently only compatible with MAC OS X.
