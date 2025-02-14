import React from 'react'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'
import { fireworks,mocha } from '../assets';

function Closing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-black/20 flex flex-col items-center justify-center">
      <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        {/* Fireworks background */}
        <div
          className="absolute inset-0 z-100 opacity-50"
          style={{
            backgroundImage: `url(${fireworks})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* Christmas tree */}
        <div className="z-10 mb-8">
          <img
            src={mocha}
            alt="Animated Christmas Tree"
            className="w-64 h-64 object-contain"
          />
        </div>

        {/* Greeting text */}
        <div className='w-[90%] max-w-[400px]'>
          <p className="z-10 text-white text-center text-xl font-semibold px-4 drop-shadow-lg">
            Valentine’s Day has always been special, but it’s never meant as much to me as it does now. It’s not just the holiday or the idea of it, but the fact that I get to call you Jayla, my Valentine. For the last two years, you’ve been my everything my other half, my best friend, my heart. And when I think back on everything we’ve shared, I feel so incredibly lucky that you’re the one I get to spend these moments with. Two years… It honestly feels like it’s been both the blink of an eye and a lifetime all at once. But in those two years, our relationship has grown into something so much deeper. What we have now, what we’ve built together, is more than I ever imagined. And I’ve realized that it’s not just about the big moments, but all the little ones too. The eepy mornings, the facetimes, the sleep calls, the way we laugh at the silliest things, and the way you just get me, those are the things that mean the most. You’ve been my Valentine for two whole years now, and I wouldn’t change a single thing. Every day with you is a reminder of how lucky I am to have you in my life. I love how we’ve learned and grown together, how we’ve supported each other through tough times, and how we’ve celebrated the good ones. But most of all, I love how effortless it feels to be with you. It’s like we’re just meant to be, and every day that goes by, I’m more certain of that than ever before. You are everything I’ve ever wanted in someone, and I don’t just mean that in the traditional “Valentine’s Day” sense. It’s deeper than that. You make me feel seen, loved, and understood in a way I never thought possible. When I’m with you, I feel at home, and I know that no matter what happens, we’ll always have each other. So, on this special day, I want to thank you. Thank you for being my Valentine, for being my constant, for being the person who makes everything in my life brighter. I can’t imagine my life without you, and I wouldn’t want to. Thank you for two years, countless memories, and so many more to come. I love you more than I can ever fully put into words, but I’ll spend my life trying to show you.
          </p>

        {/* Button */}
          <div className="flex justify-center w-full mt-12 z-10">
            <button
              className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
              onClick={() => navigate('/letter')}
            >
              <ArrowLeft /> Previous page
            </button>
          </div>   
        </div>
      </div>
    </div>

  )
}

export default Closing