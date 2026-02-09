'use client';

import Home from '@/components/Home';
import Catalog from '@/components/Catalog';
import AIGenerator from '@/components/AIGenerator';
import { useNavigation } from '@/context/NavigationContext';

// Comparison Views
import CardComparison from '@/components/comparisons/CardComparison';
import ButtonComparison from '@/components/comparisons/ButtonComparison';
import InputComparison from '@/components/comparisons/InputComparison';
import AvatarComparison from '@/components/comparisons/AvatarComparison';
import SwitchComparison from '@/components/comparisons/SwitchComparison';
import AlertComparison from '@/components/comparisons/AlertComparison';
import CheckboxComparison from '@/components/comparisons/CheckboxComparison';

export default function RootPage() {
  const { activeView } = useNavigation();

  return (
    <>
      {activeView === 'home' && <Home />}
      {activeView === 'catalog' && <Catalog />}
      {activeView === 'ai-generator' && <AIGenerator />}

      {/* Component Specific Comparisons */}
      {activeView === 'card' && <CardComparison />}
      {activeView === 'button' && <ButtonComparison />}
      {activeView === 'input' && <InputComparison />}
      {activeView === 'avatar' && <AvatarComparison />}
      {activeView === 'switch' && <SwitchComparison />}
      {activeView === 'alert' && <AlertComparison />}
      {activeView === 'checkbox' && <CheckboxComparison />}
    </>
  );
}
