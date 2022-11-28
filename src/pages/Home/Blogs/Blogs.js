import React from 'react';


const Blogs = () => {
    return (
        <div className='grid w-9/12 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3'>
                <div className=''>
                    <img className='rounded' src='https://www.patterns.dev/img/reactjs/react-logo@3x.svg' alt="" />
                </div>
                <div className='w-4/5 '>
                    <h1 className='text-3xl font-bold mb-3'>What are the different ways to manage a state in a React application?</h1>
                    <p className='text-xl'>As your application grows, it helps to be more intentional about how your state is organized and how the data flows between your components. Redundant or duplicate state is a common source of bugs. In this chapter, you’ll learn how to structure your state well, how to keep your state update logic maintainable, and how to share state between distant components.</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3'>
                <div className=''>
                    <img className='rounded' src='https://scontent.fdac116-1.fna.fbcdn.net/v/t1.15752-9/316872902_500064442088961_6510826075495721022_n.png?stp=dst-png_s2048x2048&_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHQoQ_5cGHdR3u6kmJGld_8J8vhLap3lXYny-EtqneVdokxq2VJcSRRkQ-N1CvkuEkS23kkn82Y4i5z-g_XuxvR&_nc_ohc=oWf-JCuKTZAAX8YKTwV&_nc_ht=scontent.fdac116-1.fna&oh=03_AdS-mgdY--AtrXZLux-XLQeCyUuNr7hQTW775nWn_Cvpyg&oe=63AB25DA' alt="" />
                </div>
                <div className='w-4/5 '>
                    <h1 className='text-3xl font-bold mb-3'>How does prototypical inheritance work?</h1>
                    <p className='text-xl'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3'>
                <div className=''>
                    <img className='rounded' src='https://scontent.fdac116-1.fna.fbcdn.net/v/t1.15752-9/316961449_1356073108478366_2327674653201300965_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeH0VCoyKtUJbIe2W55ZHOvwcc3gnJdZNupxzeCcl1k26nlQOHnwM7gq-wd5ULGy91jd74ksfunu9U2dLs45YM8a&_nc_ohc=3FTd9swbsvkAX9o0gms&_nc_ht=scontent.fdac116-1.fna&oh=03_AdTZWAHs3s_og3XFNUfI2zDT_seZqdm-L4ZnCAKTUlvItg&oe=63AB1E7C' alt="" />
                </div>
                <div className='w-4/5 '>
                    <h1 className='text-3xl font-bold mb-3'>What is a unit test? Why should we write unit tests?</h1>
                    <p className='text-xl'>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3'>
                <div className=''>
                    <img className='rounded' src='https://cdn.themexpert.com/images/easyblog_articles/688/Blog-banner.png' alt="" />
                </div>
                <div className='w-4/5 '>
                    <h1 className='text-3xl font-bold mb-3'> React vs. Angular vs. Vue?</h1>
                    <p className='text-xl'>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components</p>
                </div>
            </div>


        </div>
    );
};

export default Blogs;

