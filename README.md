[![Flash Compiler][flash_compiler_image]][gh_page]
=====
> Another Flash compiler

> [![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/adriancmiranda/flash-compiler/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

[![Apache Flex SDK][apache_flex_sdk_image]][apache_flex_sdk_site] | [![Adobe AIR SDK][adobe_air_sdk_image]][adobe_air_sdk_site]
--- | --- |
[Apache Flex SDK][apache_flex_sdk_site] and [Adobe AIR SDK][adobe_air_sdk_site] are used for build, preview and test your binary files.

[![Android SDK][android_sdk_image]][android_sdk_site] | [![iOS SDK][ios_sdk_image]][ios_sdk_site]
--- | --- |
[Android SDK][android_sdk_site] and [iOS SDK][ios_sdk_site] are used for emulate, preview and test your mobile binary files.

[![Grunt][grunt_image]][grunt_site] | [![Gulp][gulp_image]][gulp_site]
--- | --- |
[Grunt][grunt_site] or [Gulp][gulp_site] are used for build, preview and test your project.

[![Bower][bower_image]][bower_site] | [![JAM][jam_image]][jam_site]
--- | --- |
[Bower][bower_site] or [JAM][jam_site] are used for dependency management.

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
        -apk (✓ Android application package file)
        -ipa (✖ iOS application) 
        -air (✓ Adobe Integrated Runtime)
        -exe (? Windows Executable file)
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

Contributing
============
1. [Fork it][fork_it].
2. Run `git checkout -b my-new-feature` to create your feature branch.
3. Run `git commit -am 'Add some feature'` to commit your changes.
4. Run `git push origin my-new-feature` to push to the branch.
5. Create new [Pull Request][pull_request].

<sub>[▴ Back to top](#)</sub>

<!-- images -->
[flash_compiler_image]: https://raw2.github.com/adriancmiranda/flash-compiler/master/examples/desktop/html/source/application/images/flash-compiler.png "Flash Compiler"
[android_sdk_image]: https://raw2.github.com/adriancmiranda/flash-compiler/master/examples/desktop/html/source/application/images/bullet-android.png "Android SDK"
[ios_sdk_image]: https://raw2.github.com/adriancmiranda/flash-compiler/master/examples/desktop/html/source/application/images/bullet-ios.png "iOS SDK" 
[apache_flex_sdk_image]: https://raw2.github.com/adriancmiranda/flash-compiler/master/examples/desktop/html/source/application/images/bullet-flex.png "Apache Flex SDK"
[adobe_air_sdk_image]: https://raw2.github.com/adriancmiranda/flash-compiler/master/examples/desktop/html/source/application/images/bullet-air.png "Adobe AIR SDK"
[grunt_image]: https://raw2.github.com/adriancmiranda/flash-compiler/master/examples/desktop/html/source/application/images/bullet-grunt.gif "Grunt"
[gulp_image]: https://raw.githubusercontent.com/adriancmiranda/flash-compiler/master/examples/desktop/html/source/application/images/bullet-gulp.png "Gulp"
[bower_image]: https://raw2.github.com/adriancmiranda/flash-compiler/master/examples/desktop/html/source/application/images/bullet-bower.gif "Bower"
[jam_image]: https://raw.githubusercontent.com/adriancmiranda/flash-compiler/master/examples/desktop/html/source/application/images/bullet-jam.png "JAM"

<!-- links -->
[gh_page]: http://adriancmiranda.github.io/flash-compiler/ "flash-compiler"
[license]: http://www.apache.org/licenses/LICENSE-2.0 "Apache License 2.0"
[issue_tracker]: http://github.com/adriancmiranda/flash-compiler/issues "Issue tracker"
[fork_it]: https://github.com/adriancmiranda/flash-compiler/fork "Fork it"
[pull_request]: https://github.com/adriancmiranda/flash-compiler/compare/ "Pull request"
[android_sdk_site]: http://developer.android.com/sdk/index.html "Android SDK"
[ios_sdk_site]: https://developer.apple.com/devcenter/ios/index.action "iOS SDK"
[apache_flex_sdk_site]: http://flex.apache.org/ "Apache Flex SDK"
[adobe_air_sdk_site]: http://www.adobe.com/devnet/air/air-sdk-download.html "Adobe AIR SDK"
[grunt_site]: http://gruntjs.com/ "Grunt JS"
[gulp_site]: http://gulpjs.com/ "Gulp JS"
[bower_site]: http://bower.io/ "Bower"
[jam_site]: http://jamjs.org/ "JAM"


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/adriancmiranda/flash-compiler/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

