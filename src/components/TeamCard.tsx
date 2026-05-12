import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { TeamMember } from '../data/team';

interface TeamCardProps {
  member: TeamMember;
  onSelect: (member: TeamMember) => void;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(member)}
      className="text-left group w-full"
      aria-label={`Read biography of ${member.name}`}
    >
      <div className="aspect-[4/5] bg-navy-50 mb-5 overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700">
        <img src={member.photo} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
      </div>
      <h3 className="text-lg font-display font-bold text-navy mb-1 group-hover:text-gold transition-colors">{member.name}</h3>
      <p className="text-xs font-body font-semibold tracking-wider uppercase text-gold/80 mb-3">{member.role}</p>
      <span className="inline-flex items-center text-xs font-semibold text-navy/50 group-hover:text-navy transition-colors">
        Read Bio <ArrowRight className="ml-1.5 size-3 group-hover:translate-x-1 transition-transform" />
      </span>
      <div className="mt-3 h-0.5 w-0 bg-gold group-hover:w-full transition-all duration-500" />
    </button>
  );
};

export default TeamCard;
