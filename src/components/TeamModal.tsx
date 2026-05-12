import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, GraduationCap, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { TeamMember } from '../data/team';

interface TeamModalProps {
  member: TeamMember | null;
  members: TeamMember[];
  onClose: () => void;
  onNavigate: (member: TeamMember) => void;
}

const TeamModal: React.FC<TeamModalProps> = ({ member, members, onClose, onNavigate }) => {
  const currentIndex = member ? members.findIndex(m => m.slug === member.slug) : -1;
  const prevMember = currentIndex > 0 ? members[currentIndex - 1] : null;
  const nextMember = currentIndex < members.length - 1 ? members[currentIndex + 1] : null;

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft' && prevMember) onNavigate(prevMember);
    if (e.key === 'ArrowRight' && nextMember) onNavigate(nextMember);
  }, [onClose, onNavigate, prevMember, nextMember]);

  useEffect(() => {
    if (member) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      window.location.hash = `team/${member.slug}`;
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [member, handleKeyDown]);

  return (
    <AnimatePresence>
      {member && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Biography of ${member.name}`}
        >
          <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Header controls */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-sm z-10 flex items-center justify-between px-8 py-4 border-b border-navy/5">
              <div className="flex items-center gap-2">
                <button onClick={() => prevMember && onNavigate(prevMember)} disabled={!prevMember} className="p-2 hover:bg-cream rounded-sm transition-colors disabled:opacity-20" aria-label="Previous">
                  <ChevronLeft className="size-4" />
                </button>
                <button onClick={() => nextMember && onNavigate(nextMember)} disabled={!nextMember} className="p-2 hover:bg-cream rounded-sm transition-colors disabled:opacity-20" aria-label="Next">
                  <ChevronRight className="size-4" />
                </button>
                <span className="text-xs text-navy/40 ml-2">{currentIndex + 1} of {members.length}</span>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-cream rounded-sm transition-colors" aria-label="Close">
                <X className="size-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 mb-10">
                <div className="w-48 h-60 shrink-0 rounded-sm overflow-hidden bg-cream">
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-2">{member.name}</h2>
                  <p className="text-sm font-semibold tracking-wider uppercase text-gold mb-6">{member.role}</p>
                  <div className="flex items-start gap-2 text-sm text-navy/60">
                    <GraduationCap className="size-4 mt-0.5 shrink-0 text-gold" />
                    <span>{member.education}</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-navy/40 mb-4">Biography</h3>
                <p className="text-navy/80 leading-relaxed text-[15px]">{member.bio}</p>
              </div>

              {member.boardRoles && member.boardRoles.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-navy/40 mb-4">Industry Contributions</h3>
                  <ul className="space-y-2">
                    {member.boardRoles.map((role, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-navy/70">
                        <Award className="size-3.5 mt-1 text-gold shrink-0" />
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="h-px bg-navy/5 my-8" />
              <p className="text-xs text-navy/30 text-center">Press ← → to navigate • ESC to close</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TeamModal;
