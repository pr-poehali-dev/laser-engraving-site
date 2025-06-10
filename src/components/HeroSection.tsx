
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Лазерная<br />Гравировка
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Превращаем ваши идеи в уникальные изделия с помощью высокоточной лазерной технологии
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <Icon name="Zap" size={40} className="text-purple-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Высокая точность</h3>
            <p className="text-sm text-gray-400 text-center">Детализация до 0.1 мм</p>
          </div>
          
          <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <Icon name="Clock" size={40} className="text-purple-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Быстрое выполнение</h3>
            <p className="text-sm text-gray-400 text-center">От 1 дня</p>
          </div>
          
          <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <Icon name="Award" size={40} className="text-purple-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Премиум качество</h3>
            <p className="text-sm text-gray-400 text-center">Идеальный результат</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl">
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Заказать гравировку
          </Button>
          <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full">
            <Icon name="Play" size={20} className="mr-2" />
            Посмотреть работы
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-purple-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
