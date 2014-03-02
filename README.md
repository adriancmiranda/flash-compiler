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

![Android SDK](https://raw2.github.com/adriancmiranda/flash-compiler/master/examples/desktop/html/source/application/images/bullet-android.png "Android SDK")

[Android SDK](http://developer.android.com/sdk/index.html) is used for build apk binary files.

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
        -app (✓ Application bundle)
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
* [AIR - Comando package do ADT](http://help.adobe.com/pt_BR/air/build/WS901d38e593cd1bac1e63e3d128cdca935b-8000.html)
* [AIR - Building Apps](http://help.adobe.com/en_US/air/build/air_buildingapps.pdf)

Warning
=======
Flash compiler is currently only compatible with MAC OS X. No guarantee, but I think that you can perform using [cygwin](http://cygwin.com/) on Microsoft Windows.

Support
=======

 * [Issue tracker][issue_tracker]

Bugs and issues should be reported via the [issue tracker][issue_tracker].

[issue_tracker]: http://github.com/simongregory/hel-log/issues
