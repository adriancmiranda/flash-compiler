![Flash Compiler][flash_compiler_image]
=====

![Grunt][grunt_image]

[Grunt][grunt_site] is used to build, preview and test your project.

![Bower][bower_image]

[Bower][bower_site] is used for dependency management.

![Apache Flex SDK][apache_flex_sdk_image]

[Apache Flex SDK][apache_flex_sdk_site] is used for build binary files.

![iOS SDK][ios_sdk_image]

[iOS SDK][ios_sdk_site] is used for build ipa binary files.

![Android SDK][android_sdk_image]

[Android SDK][android_sdk_site] is used for build apk binary files.

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
Bugs and issues should be reported via the [issue tracker][issue_tracker].

[flash_compiler_image]: https://raw2.github.com/adriancmiranda/flash-compiler/master/examples/desktop/html/source/application/images/flash-compiler.png "Flash Compiler"
[android_sdk_image]: https://raw2.github.com/adriancmiranda/flash-compiler/master/examples/desktop/html/source/application/images/bullet-android.png "Android SDK"
[ios_sdk_image]: https://raw2.github.com/adriancmiranda/flash-compiler/master/examples/desktop/html/source/application/images/bullet-ios.png "iOS SDK" 
[apache_flex_sdk_image]: https://raw2.github.com/adriancmiranda/flash-compiler/master/examples/desktop/html/source/application/images/bullet-flex.png "Apache Flex SDK"
[grunt_image]: https://raw2.github.com/adriancmiranda/flash-compiler/master/examples/desktop/html/source/application/images/bullet-grunt.gif "Grunt"
[bower_image]: https://raw2.github.com/adriancmiranda/flash-compiler/master/examples/desktop/html/source/application/images/bullet-bower.gif "Bower"

[issue_tracker]: http://github.com/adriancmiranda/flash-compiler/issues "Issue tracker"
[android_sdk_site]: http://developer.android.com/sdk/index.html "Android SDK"
[ios_sdk_site]: https://developer.apple.com/devcenter/ios/index.action "iOS SDK"
[apache_flex_sdk_site]: http://flex.apache.org/ "Apache Flex SDK"
[grunt_site]: http://gruntjs.com/ "Grunt JS"
[bower_site]: http://bower.io/ "Bower"
