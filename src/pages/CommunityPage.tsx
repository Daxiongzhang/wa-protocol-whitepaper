import { MessageCircle, Users, Calendar, ExternalLink } from 'lucide-react';
import { memo } from 'react';
import type { Language } from '../App';
import { communityTranslations } from '../data/community-content';

function CommunityPageComponent({ language }: { language: Language }) {
  const t = communityTranslations[language];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="container mx-auto px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-white font-medium text-5xl mb-3 tracking-tight">
            {t.title}
          </h1>
          <p className="text-slate-400 text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {t.stats.map((stat, index) => (
            <div key={index} className="ui-panel-soft text-center p-8">
              <div className="text-4xl font-medium text-white mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Channels */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {t.channels.map((channel, index) => (
            <div
              key={index}
              className="ui-panel-soft ui-panel-hover group p-6 hover:border-lime-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium text-white mb-2 flex items-center gap-2">
                    <MessageCircle size={24} className="text-lime-400" />
                    {channel.name}
                  </h3>
                  <p className="text-slate-400 text-sm mb-3">
                    {channel.desc}
                  </p>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Users size={16} />
                    {channel.members} {t.membersLabel}
                  </div>
                </div>
              </div>
              <a
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ui-btn ui-btn-primary px-4 py-2 text-sm"
              >
                {t.joinBtn}
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Events */}
        <div>
          <h2 className="text-2xl font-medium text-white mb-6">
            {t.eventsTitle}
          </h2>
          <div className="space-y-4">
            {t.events.map((event, index) => (
              <div
                key={index}
                className="ui-panel-soft ui-panel-hover p-6 hover:border-lime-500/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="ui-badge ui-badge-emerald">
                        {event.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-4 text-slate-400 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {event.date}
                      </span>
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <button className="ui-btn ui-btn-primary px-6 py-2.5 text-sm whitespace-nowrap">
                    {t.registerBtn}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export const CommunityPage = memo(CommunityPageComponent);
