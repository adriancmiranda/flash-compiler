Adobe AIR 3.9 SDK
README FILE


======What's included in the SDK======

The AIR SDK includes this Readme.txt file and the AIR SDK license.pdf file, which contains the 
Warranty Disclaimer and License Agreement for the Adobe AIR SDK. The AIR SDK also includes 
the following directories:


BIN


 - adl (adl.exe on Windows) - The AIR Debug Launcher (ADL) allows you to test an AIR application without having to package and install it.

 - adt (adt.bat on Windows) - The AIR Developer Tool (ADT) packages your application as an .air file for distribution.  

FRAMEWORKS

 - A libs directory that contains the following AIR frameworks:

    - AIRAliases.js - Provides "alias" definitions that allow you to access the AIR runtime classes from Javascript.

    - airglobal.swc - Provides the core AIR API used when compiling SWF content.

    - AIRIntrospector.js - Assists in AIR application development, allowing you to inspect JavaScript properties, view the HTML DOM, and view source files at run time.  

    - AIRLocalizer.js - Assists in developing localized (multi-language) versions of in HTML-based AIR applications.

    - AIRMenuBuilder.js - Assists in creating menus in HTML-based AIR applications.

    - AIRSourceViewer.js - Lets users view source files in an AIR application. 

    - applicationupdater.swc - Provides Flex-based AIR applications with a framework for assisting in managing application updates.

    - applicationupdater.swf - Provides HTML-based applications with a framework for assisting in managing application updates.

    - applicationupdater_ui.swc - Provides Flex-based AIR applications with a framework for assisting in managing application updates. This version of the framework provides a default user interface.

    - applicationupdater_ui.swf - Provides HTML-based applications with a framework for assisting in managing application updates. This version of the framework provides a default user interface.

    - servicemonitor.swc - Provides Flex-based AIR applications with an event-based means of responding to changes in network connectivity to a specified host.

    - servicemonitor.swf - Provides HTML-based AIR applications with an event-based means of responding to changes in network connectivity to a specified host. 

    - aircore.swc - Provides Flex-based AIR applications various additional API, including service monitoring.

    - aircore.swf - Provides HTML-based AIR applications various additional API, including service monitoring.

 - A PROJECTS directory, which includes source files for the AIR application update framework, for the service monitor framework, and for Android application licensing.

LIB

 - adt.jar - The ADT executable file, which is called by the adt file (or adt.bat on Windows). 

RUNTIMES

 - The AIR runtime - The runtime is used by ADL to launch your AIR applications before they have been packaged or installed. 

SAMPLES

 - descriptor-sample.xml - A sample application descriptor file.

 - badge - A directory containing sample files for the AIR seamless install feature, which lets you distribute an AIR application directly from a web page.

 - icons - A directory containing the default AIR application icons. 

TEMPLATES/AIR

 - Descriptor.1.1.xsd - An XML Schema Definition file for the AIR 1.1 application descriptor file. 

 - Descriptor.1.5.xsd - An XML Schema Definition file for the AIR 1.5 application descriptor file. 

 - Descriptor.1.5.1.xsd - An XML Schema Definition file for the AIR 1.5.1 application descriptor file. 

 - Descriptor.1.5.2.xsd - An XML Schema Definition file for the AIR 1.5.2 application descriptor file. 

 - Descriptor.1.5.3.xsd - An XML Schema Definition file for the AIR 1.5.3 application descriptor file. 

 - Descriptor.2.0.xsd - An XML Schema Definition file for the AIR 2.0 application descriptor file. 

 - Descriptor.2.5.xsd - An XML Schema Definition file for the AIR 2.5 application descriptor file. 

 - Descriptor.2.6.xsd - An XML Schema Definition file for the AIR 2.6 application descriptor file. 

 - Descriptor.2.7.xsd - An XML Schema Definition file for the AIR 2.7 application descriptor file. 

 - Descriptor.3.0.xsd - An XML Schema Definition file for the AIR 3.0 application descriptor file. 

 - Descriptor.3.1.xsd - An XML Schema Definition file for the AIR 3.1 application descriptor file. 
 
 - Descriptor.3.2.xsd - An XML Schema Definition file for the AIR 3.2 application descriptor file. 
 
 - Descriptor.3.3.xsd - An XML Schema Definition file for the AIR 3.3 application descriptor file. 

 - Descriptor.3.4.xsd - An XML Schema Definition file for the AIR 3.4 application descriptor file. 

 - Descriptor.3.5.xsd - An XML Schema Definition file for the AIR 3.5 application descriptor file. 
 
 - Descriptor.3.6.xsd - An XML Schema Definition file for the AIR 3.6 application descriptor file. 

 - Descriptor.3.7.xsd - An XML Schema Definition file for the AIR 3.7 application descriptor file. 

 - Descriptor.3.8.xsd - An XML Schema Definition file for the AIR 3.8 application descriptor file.
 
 - Descriptor.3.9.xsd - An XML Schema Definition file for the AIR 3.9 application descriptor file.

 - descriptor-template.xml - A template of the application descriptor file, which is required for each AIR application. 


TEMPLATES/EXTENSIONS

 - Descriptor.2.5.xsd - An XML Schema Definition file for the AIR 2.5 extension descriptor file. 

 - Descriptor.3.1.xsd - An XML Schema Definition file for the AIR 3.1 extension descriptor file. 

 - Descriptor.3.2.xsd - An XML Schema Definition file for the AIR 3.2 extension descriptor file. 

 - Descriptor.3.3.xsd - An XML Schema Definition file for the AIR 3.3 extension descriptor file. 

 - Descriptor.3.4.xsd - An XML Schema Definition file for the AIR 3.4 extension descriptor file. 

 - Descriptor.3.5.xsd - An XML Schema Definition file for the AIR 3.5 extension descriptor file. 
 
 - Descriptor.3.6.xsd - An XML Schema Definition file for the AIR 3.6 extension descriptor file. 

 - Descriptor.3.7.xsd - An XML Schema Definition file for the AIR 3.7 extension descriptor file. 

 - Descriptor.3.8.xsd - An XML Schema Definition file for the AIR 3.8 extension descriptor file. 
 
 - Descriptor.3.9.xsd - An XML Schema Definition file for the AIR 3.9 extension descriptor file. 

 - extension-descriptor-template.xml -  A template of the extension descriptor file, which is required for each AIR extension.


TEMPLATES/EXTENSIONS/iOS

 - Descriptor.3.1.xsd - An XML Schema Definition file for the AIR 3.1 iOS platform descriptor file.

 - Descriptor.3.2.xsd - An XML Schema Definition file for the AIR 3.2 iOS platform descriptor file.
 
 - Descriptor.3.3.xsd - An XML Schema Definition file for the AIR 3.3 iOS platform descriptor file.
 
 - Descriptor.3.4.xsd - An XML Schema Definition file for the AIR 3.4 iOS platform descriptor file.

 - Descriptor.3.5.xsd - An XML Schema Definition file for the AIR 3.5 iOS platform descriptor file.
 
 - Descriptor.3.6.xsd - An XML Schema Definition file for the AIR 3.6 iOS platform descriptor file.

 - Descriptor.3.7.xsd - An XML Schema Definition file for the AIR 3.7 iOS platform descriptor file. 

 - Descriptor.3.8.xsd - An XML Schema Definition file for the AIR 3.8 iOS platform descriptor file. 
 
 - Descriptor.3.9.xsd - An XML Schema Definition file for the AIR 3.9 iOS platform descriptor file. 

 - platform-descriptor-template.xml - A template of the iOS platform descriptor file, for iOS platform specific options.


======iOS Target Support======

If you have downloaded a version of the AIR SDK that supports packaging iOS targets, additional files will be included. The following files and folders in the AIR SDK contain the tools that enable you to compile AIR applications into .ipa files for iOS devices.

LIB
 - AOT - Directory containing the files necessary for the AOT (Ahead of Time) Compiler used by ADT


======Getting Started with the AIR SDK======

1) Build your source files using the editor of your choice. Arrange them as you would on a web server, in a single folder with relative references.

2) If you are using the AIR APIs in JavaScript, include a <script> reference to the AIRAliases.js file. AIR APIs are only available to your application content (not to content loaded from remote sources). Also, there are limitations on calling the eval() function and similar APIs in AIR application content. For details, see the AIR SDK documentation (listed below).

3) Use ADL to test your application with the debugger.

4) Use ADT to build an application installer that can be distributed to other people.

5) If you're distributing your AIR application from a web page, refer to the topic "Distributing and installing using the seamless install feature" in "Developing Adobe AIR Applications with HTML and Ajax". 

More information about all of these steps is available in the "Developing Adobe AIR Applications with HTML and Ajax". See the next section for the locations of the AIR documentation.

If you want to build Flex-based AIR applications, download the Flex SDK: http://www.adobe.com/go/flex_sdk/


======AIR SDK Documentation======

The following Adobe AIR HTML developer documentation is available in the LiveDocs (online) format: 

 - Developing Adobe AIR Applications with HTML and Ajax -- http://www.adobe.com/go/learn_air_html
 - Adobe AIR Quick Starts for HTML -- http://www.adobe.com/go/learn_air_html_qs
 - Adobe AIR Language Reference for HTML Developers -- http://www.adobe.com/go/learn_air_html_jslr 


===Downloading Adobe AIR HTML documentation===

The Adobe AIR HTML documentation set (a ZIP file) is available for download here:

  http://www.adobe.com/go/learn_air_html_docs


===Adobe AIR SDK License in other languages===

The Adobe AIR SDK License is also available for review on the following Adobe web sites.

English:
http://www.adobe.com/products/eulas/

French:
http://www.adobe.com/fr/products/eulas/

German:
http://www.adobe.com/de/products/eulas/

Italian:
http://www.adobe.com/it/products/eulas/

Spanish:
http://www.adobe.com/es/products/eulas/

Brazilian Portuguese:
http://www.adobe.com/br/products/eulas/

Japanese:
http://www.adobe.com/jp/products/eulas/

Chinese:
http://www.adobe.com/cn/products/eulas/

Korean:
http://www.adobe.com/kr/products/eulas/

Russian:
http://www.adobe.com/ru/products/eulas/
