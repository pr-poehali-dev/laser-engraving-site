import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Все работы" },
    { id: "jewelry", name: "Украшения" },
    { id: "tech", name: "Электроника" },
    { id: "gifts", name: "Подарки" },
    { id: "business", name: "Бизнес" },
  ];

  const portfolio = [
    {
      id: 1,
      category: "jewelry",
      title: "Именное кольцо",
      description: "Гравировка имени на серебряном кольце",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      tags: ["Серебро", "Персонализация"],
    },
    {
      id: 2,
      category: "tech",
      title: "iPhone с логотипом",
      description: "Корпоративная гравировка на iPhone",
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
      tags: ["Алюминий", "Логотип"],
    },
    {
      id: 3,
      category: "gifts",
      title: "Деревянная фоторамка",
      description: "Персональная надпись на рамке",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
      tags: ["Дерево", "Подарок"],
    },
    {
      id: 4,
      category: "business",
      title: "Корпоративные ручки",
      description: "Гравировка логотипа компании",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
      tags: ["Металл", "Корпоратив"],
    },
    {
      id: 5,
      category: "jewelry",
      title: "Браслет с датой",
      description: "Памятная дата на золотом браслете",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      tags: ["Золото", "Дата"],
    },
    {
      id: 6,
      category: "tech",
      title: "MacBook с монограммой",
      description: "Элегантная монограмма на крышке",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
      tags: ["Алюминий", "Монограмма"],
    },
  ];

  const filteredPortfolio =
    activeCategory === "all"
      ? portfolio
      : portfolio.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Наши работы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Более 10,000 выполненных заказов за 5 лет работы
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-purple-600 text-white shadow-lg"
                  : "hover:bg-purple-50 hover:border-purple-300"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPortfolio.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-300 mb-3">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-purple-600/80 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
              10,000+
            </div>
            <div className="text-gray-600">Выполненных заказов</div>
          </div>
          <div className="p-6">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
              5
            </div>
            <div className="text-gray-600">Лет опыта</div>
          </div>
          <div className="p-6">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
              24
            </div>
            <div className="text-gray-600">Часа в сутки</div>
          </div>
          <div className="p-6">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
              99%
            </div>
            <div className="text-gray-600">Довольных клиентов</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
