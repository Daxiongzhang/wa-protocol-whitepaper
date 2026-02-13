import { ArrowLeft, MessageCircle, Twitter, Send, Youtube, ExternalLink } from 'lucide-react';
import { memo } from 'react';
import type { Language, Page } from '../App';
import { socialTranslations, socialChannels } from '../data/social-content';

interface SocialPageProps {
  language: Language;
  setCurrentPage: (page: Page) => void;
}

function SocialPageComponent({ language, setCurrentPage }: SocialPageProps) {
  const t = socialTranslations[language];

  const iconMap = {
    telegram: Send,
    twitter: Twitter,
    discord: MessageCircle,
    youtube: Youtube
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <button
          onClick={() => setCurrentPage('home')}
          className="group flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors duration-200"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-200" />
          <span className="text-sm">{t.backToHome}</span>
        </button>

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-lime-500/10 to-emerald-500/10 rounded-2xl mb-6">
            <MessageCircle className="text-lime-400" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-medium text-white mb-4">
            {t.title}
          </h1>
          <p className="text-lg text-zinc-400">
            {t.subtitle}
          </p>
        </div>

        {/* Social Channels Grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {socialChannels.map((channel) => {
            const Icon = iconMap[channel.id as keyof typeof iconMap];
            const channelData = t.channels[channel.id as keyof typeof t.channels];

            return (
              <div
                key={channel.id}
                className={`group p-6 bg-zinc-900/30 border ${channel.borderColor} ${channel.hoverBorder} rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              >
                {/* Icon & Stats */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 ${channel.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`bg-gradient-to-br ${channel.color} bg-clip-text text-transparent`} size={28} />
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-semibold text-white">{channel.stats}</div>
                    <div className="text-xs text-zinc-500">
                      {channel.id === 'telegram' || channel.id === 'discord' ? t.members : t.followers}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-medium text-white mb-2">
                  {channelData.name}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                  {channelData.desc}
                </p>

                {/* Action Button */}
                <button className={`group/btn w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${channel.color} bg-opacity-10 hover:bg-opacity-20 text-white border ${channel.borderColor} ${channel.hoverBorder} rounded-lg transition-all duration-200`}>
                  <span className="text-sm font-medium">{channelData.link}</span>
                  <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const SocialPage = memo(SocialPageComponent);
