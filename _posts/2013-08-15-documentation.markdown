---
layout: saiku
title:  "Documentation"
date:   2013-08-15 12:10:09
categories: saiku documentation development
---

Documentation
==============
If you would like to improve Saiku documentation, you will need to follow steps outlined here.

Pre-requisites
--------------

 - [github](https://github.com/) account
 - [git](http://git-scm.com/)
 - [jekyll](http://jekyllrb.com/) 
 
Getting Documentation Source
------------------------------
First you need to create fork of a [saikudocs repository](https://github.com/buggtb/saikudocs). Login on Github, go to the [repository](https://github.com/buggtb/saikudocs) and click on fork icon.

Now you can clone your forked repository to your computer. Do not forget to replace [username] with your real github account name.

    $ git clone https://github.com/[username]/saikudocs.git
    $ cd saikudocs

You can also add upstream origin and fetch any changes:

    $ git remote add upstream https://github.com/buggtb/saikudocs.git
    $ git fetch upstream

If in doubt, Github has good [tutorial](https://help.github.com/articles/fork-a-repo) on this.
    
Editing documentation
---------------------

All documentaion is stored in folder `saikudocs/_posts` as plain text markdown files. You can use your favourite text editor and edit text directly.

Basic markdown syntax:

    Header1
    ========
    
    Header2
    --------
    
    ###Header 3
    
     - List Item 1
     - List Item 2

     Standard text:
     
        code of block has to be indented
        by four space
        
    Standard text
    
     1. Numbered Item 1
     2. Numbered Item 2
     
    This is some text with `inline code`.
    
    This is some text with [hyperlink](http://analytical-labs.com)
    
Will be rendered as:    

> Header1
> ========
> 
> Header2
> --------
> 
> ###Header 3
> 
>   - List Item 1
>   - List Item 2
>
> Standard text:
>
>     code of block has to be indented
>     by four space
>   
> Standard text
> 
>   1. Numbered Item 1
>   2. Numbered Item 2
>   
> This is some text with `inline code`.
> 
> This is some text with [hyperlink](http://analytical-labs.com)

###File header
When adding new post, you have to add header like this:

    `---`
    layout: saiku
    title:  "MDX"
    date:   2013-08-15 12:05:02
    categories: saiku documentation frontend
    `---`

Title will be shown in table of content. Date is used for sorting posts (newest date first). Category is used when generating content. Currently there are categories:

  - about
  - installation
  - configuration
  - frontend
  - development

###Modifying content

Contents is generated automatically based on header of posts. If you would like to modify apperance of content on the left side, you will need to edit file `saikudocs/_layouts/saiku.html`. 
    
Preview Changes
---------------
If you would like to preview changes before commit (and we highly recommend this), you need to let Jekyll to do it's magic. Navigate to the documentation folder and run:

    $ jekyll serve
    
This will generated some messages similar to the following:

    Configuration file: ~/saiku/saikudocs/_config.yml
            Source: ~/saiku/saikudocs
       Destination: ~/saiku/saikudocs/_site
      Generating... done.
    Server address: http://0.0.0.0:4000
    Server running... press ctrl-c to stop.

If everything goes well, you should now be able to visit http://0.0.0.0:4000 and browse generated documentation

Comitting changes
-----------------
If you are happy with your changes, you can commit changes locally:

    $ git commit -a

And then push everything to your github account:
    
    $ git push origin master
    
Because you probably want to see your changes propagated to [docs.analytical-labs.com](http://docs.analytical-labs.com) you will need to create a pull request on Github. This is as easy as clicking "New pull request" button.