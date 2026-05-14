import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Plus, Accessibility, Eye, Type, Image as ImageIcon, Link, Space, PauseCircle, BookOpen, MousePointer2, MessageSquareText, AlignLeft, Palette, X, RotateCcw } from 'lucide-react';
import { useLanguage } from '../lib/i18n';
interface A11yState {
  highContrast: boolean;
  highlightLinks: boolean;
  largeText: boolean;
  textSpacing: boolean;
  pauseAnimations: boolean;
  hideImages: boolean;
  dyslexiaFriendly: boolean;
  bigCursor: boolean;
  tooltips: boolean;
  lineHeight: boolean;
  textAlign: boolean;
  grayscale: boolean;
}
const defaultA11yState: A11yState = {
  highContrast: false,
  highlightLinks: false,
  largeText: false,
  textSpacing: false,
  pauseAnimations: false,
  hideImages: false,
  dyslexiaFriendly: false,
  bigCursor: false,
  tooltips: false,
  lineHeight: false,
  textAlign: false,
  grayscale: false
};
export function FloatingButtons() {
  const {
    t
  } = useLanguage();
  const [isEmergencyExpanded, setIsEmergencyExpanded] = useState(false);
  const [isAccessibilityExpanded, setIsAccessibilityExpanded] = useState(false);
  const [a11yState, setA11yState] = useState<A11yState>(() => {
    try {
      const saved = localStorage.getItem('a11y-features');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load a11y state', e);
    }
    return defaultA11yState;
  });
  useEffect(() => {
    localStorage.setItem('a11y-features', JSON.stringify(a11yState));
    const body = document.body;
    // Toggle classes based on state
    const toggleClass = (condition: boolean, className: string) => {
      if (condition) body.classList.add(className);else body.classList.remove(className);
    };
    toggleClass(a11yState.highContrast, 'accessibility-high-contrast');
    toggleClass(a11yState.highlightLinks, 'accessibility-highlight-links');
    toggleClass(a11yState.largeText, 'accessibility-large-text');
    toggleClass(a11yState.textSpacing, 'accessibility-letter-spacing');
    toggleClass(a11yState.pauseAnimations, 'accessibility-pause-animations');
    toggleClass(a11yState.hideImages, 'accessibility-no-images');
    toggleClass(a11yState.dyslexiaFriendly, 'accessibility-dyslexia-font');
    toggleClass(a11yState.bigCursor, 'accessibility-big-cursor');
    toggleClass(a11yState.tooltips, 'accessibility-tooltips');
    toggleClass(a11yState.lineHeight, 'accessibility-line-height');
    toggleClass(a11yState.textAlign, 'accessibility-text-align');
    toggleClass(a11yState.grayscale, 'accessibility-grayscale');
  }, [a11yState]);
  const toggleFeature = (feature: keyof A11yState) => {
    setA11yState((prev) => ({
      ...prev,
      [feature]: !prev[feature]
    }));
  };
  const resetA11y = () => {
    setA11yState(defaultA11yState);
  };
  const features = [{
    id: 'highContrast',
    icon: Eye,
    label: t('a11y.highContrast')
  }, {
    id: 'highlightLinks',
    icon: Link,
    label: t('a11y.highlightLinks')
  }, {
    id: 'largeText',
    icon: Type,
    label: t('a11y.largeText')
  }, {
    id: 'textSpacing',
    icon: Space,
    label: t('a11y.textSpacing')
  }, {
    id: 'pauseAnimations',
    icon: PauseCircle,
    label: t('a11y.pauseAnimations')
  }, {
    id: 'hideImages',
    icon: ImageIcon,
    label: t('a11y.hideImages')
  }, {
    id: 'dyslexiaFriendly',
    icon: BookOpen,
    label: t('a11y.dyslexiaFriendly')
  }, {
    id: 'bigCursor',
    icon: MousePointer2,
    label: t('a11y.bigCursor')
  }, {
    id: 'tooltips',
    icon: MessageSquareText,
    label: t('a11y.tooltips')
  }, {
    id: 'lineHeight',
    icon: AlignLeft,
    label: t('a11y.lineHeight')
  }, {
    id: 'textAlign',
    icon: AlignLeft,
    label: t('a11y.textAlign')
  }, {
    id: 'grayscale',
    icon: Palette,
    label: t('a11y.grayscale')
  }] as const;
  return <>
      {/* RIGHT SIDE - Emergency Buttons */}
      <div className="fixed right-4 bottom-24 z-50 flex flex-col gap-3 items-end">
        <div className="relative flex flex-col items-end">
          <AnimatePresence>
            {isEmergencyExpanded && <motion.div initial={{
            opacity: 0,
            y: 20,
            scale: 0.8
          }} animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }} exit={{
            opacity: 0,
            y: 20,
            scale: 0.8
          }} className="absolute bottom-16 right-0 flex flex-col gap-2 mb-2">
                <a href="https://wa.me/6281135778000" target="_blank" rel="noopener noreferrer" className="bg-white text-primary px-4 py-2 rounded-full shadow-md font-bold text-sm whitespace-nowrap hover:bg-gray-50 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>{' '}
                  {t('emergency.awakSigap')}
                </a>
                <a href="tel:113" className="bg-white text-red-600 px-4 py-2 rounded-full shadow-md font-bold text-sm whitespace-nowrap hover:bg-gray-50 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>{' '}
                  {t('emergency.damkar')}
                </a>
                <a href="tel:110" className="bg-white text-blue-600 px-4 py-2 rounded-full shadow-md font-bold text-sm whitespace-nowrap hover:bg-gray-50 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>{' '}
                  {t('emergency.polisi')}
                </a>
                <a href="tel:118" className="bg-white text-red-500 px-4 py-2 rounded-full shadow-md font-bold text-sm whitespace-nowrap hover:bg-gray-50 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400"></span>{' '}
                  {t('emergency.ambulans')}
                </a>
              </motion.div>}
          </AnimatePresence>

          <button onClick={() => setIsEmergencyExpanded(!isEmergencyExpanded)} className={`w-14 h-14 bg-accent hover:bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg transition-transform ${isEmergencyExpanded ? 'rotate-45' : ''}`}>
            <Plus className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* LEFT SIDE - Accessibility Panel */}
      <div className="fixed left-4 bottom-24 z-50 flex flex-col items-start">
        <div className="relative flex flex-col items-start">
          <AnimatePresence>
            {isAccessibilityExpanded && <motion.div initial={{
            opacity: 0,
            y: 20,
            scale: 0.8,
            transformOrigin: 'bottom left'
          }} animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }} exit={{
            opacity: 0,
            y: 20,
            scale: 0.8
          }} className="absolute bottom-16 left-0 mb-2 bg-white rounded-2xl shadow-2xl border border-gray-200 w-[320px] md:w-[380px] overflow-hidden flex flex-col">
                {/* Header */}
                <div className="bg-[#0D3D1C] text-white p-4 flex justify-between items-center">
                  <h3 className="font-poppins font-bold text-lg flex items-center gap-2">
                    <Accessibility className="w-5 h-5" />
                    {t('a11y.title')}
                  </h3>
                  <button onClick={() => setIsAccessibilityExpanded(false)} className="text-white/80 hover:text-white hover:bg-white/10 p-1 rounded-full transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Body Grid */}
                <div className="p-4 grid grid-cols-2 gap-3 max-h-[60vh] overflow-y-auto">
                  {features.map((feature) => {
                const isActive = a11yState[feature.id];
                const Icon = feature.icon;
                return <button key={feature.id} onClick={() => toggleFeature(feature.id)} className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all duration-200 hover:scale-[1.02] active:scale-95 ${isActive ? 'bg-[#0D3D1C] border-[#0D3D1C] text-white shadow-md' : 'bg-gray-100 border-transparent text-gray-800 hover:bg-gray-200'}`}>
                        <Icon className={`w-6 h-6 mb-2 ${isActive ? 'text-white' : 'text-[#0D3D1C]'}`} />
                        <span className="text-xs font-bold text-center leading-tight">
                          {feature.label}
                        </span>
                      </button>;
              })}
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-100 bg-gray-50 flex gap-3">
                  <button onClick={resetA11y} className="flex-1 bg-accent hover:bg-orange-500 text-white font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm">
                    <RotateCcw className="w-4 h-4" />
                    {t('a11y.reset')}
                  </button>
                  <button onClick={() => setIsAccessibilityExpanded(false)} className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2.5 px-4 rounded-xl transition-colors shadow-sm">
                    {t('a11y.close')}
                  </button>
                </div>
              </motion.div>}
          </AnimatePresence>

          
        </div>
      </div>
    </>;
}