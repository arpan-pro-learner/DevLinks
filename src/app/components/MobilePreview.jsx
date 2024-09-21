
import React from 'react';
import Image from 'next/image';

export default function MobilePreview({ links }) {
  return (
    <div className='bg-white p-6 rounded-lg shadow flex justify-center lg:h-full'>
      <div className="relative w-[308px] h-[632px]">
        <Image
          src="/images/illustration-phone-mockup.svg"
          alt="Phone mockup"
          layout="fill"
          objectFit="contain"
        />
        <div className="absolute top-[280px] left-[35px] right-[35px] bottom-[90px] overflow-y-auto">
          {links.map((link) => {
            const color = getLinkColor(link.platform);
            const iconSrc = getIconSrc(link.platform);
            // console.log(`Platform: ${link.platform}, Color: ${color}, Icon: ${iconSrc}`);

            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`mb-4 p-3 rounded-lg flex items-center ${color}`}
              >
                <span className="mr-3">
                  <img
                    src={iconSrc}
                    alt={`${link.platform} icon`}
                    className="filter brightness-0 invert w-5 h-5"
                  />
                </span>
                <span className="text-white text-sm">{link.platform}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}


function getLinkColor(platform) {
  platform = platform?.toLowerCase() || '';
  switch (platform) {
    case 'github': return 'bg-[#1A1A1A]';
    case 'twitter': return 'bg-[#1DA1F2]';
    case 'linkedin': return 'bg-[#2867B2]';
    case 'youtube': return 'bg-[#FF0000]';
    case 'facebook': return 'bg-[#1877F2]';
    case 'twitch': return 'bg-[#9146FF]';
    case 'devto': return 'bg-[#333333]';
    case 'codewars': return 'bg-[#B1361E]';
    case 'codepen': return 'bg-[#000000]';
    case 'freecodecamp': return 'bg-[#0A0A23]';
    case 'gitlab': return 'bg-[#FCA326]';
    case 'hashnode': return 'bg-[#2962FF]';
    case 'stackoverflow': return 'bg-[#F48024]';
    default: return 'bg-[#333333]';
  }
}

function getIconSrc(platform) {
  platform = platform?.toLowerCase() || '';
  switch (platform) {
    case 'github': return '/images/icon-github.svg';
    case 'twitter': return '/images/icon-twitter.svg';
    case 'linkedin': return '/images/icon-linkedin.svg';
    case 'youtube': return '/images/icon-youtube.svg';
    case 'facebook': return '/images/icon-facebook.svg';
    case 'twitch': return '/images/icon-twitch.svg';
    case 'devto': return '/images/icon-devto.svg';
    case 'codewars': return '/images/icon-codewars.svg';
    case 'codepen': return '/images/icon-codepen.svg';
    case 'freecodecamp': return '/images/icon-freecodecamp.svg';
    case 'gitlab': return '/images/icon-gitlab.svg';
    case 'hashnode': return '/images/icon-hashnode.svg';
    case 'stackoverflow': return '/images/icon-stack-overflow.svg';
    default: return '/images/icon-link.svg';
  }
}



