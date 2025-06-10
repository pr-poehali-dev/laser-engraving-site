import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const advantages = [
    {
      icon: "Target",
      title: "Точность 0,1 мм",
      description: "Высокоточное оборудование для идеального результата",
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "Полная гарантия на все виды работ",
    },
    {
      icon: "Truck",
      title: "Доставка по городу",
      description: "Бесплатная доставка заказов от 2000₽",
    },
    {
      icon: "Users",
      title: "Опытная команда",
      description: "Мастера с опытом работы более 5 лет",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              О нашей студии
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Мы — команда профессионалов, специализирующихся на высокоточной
              лазерной гравировке. За 5 лет работы выполнили более 10,000
              заказов для частных клиентов и крупных компаний.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-purple-100 mr-4 flex-shrink-0">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-purple-600"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Современное оборудование
                  </h3>
                  <p className="text-gray-600">
                    Лазеры последнего поколения для работы с любыми материалами
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-2 rounded-full bg-purple-100 mr-4 flex-shrink-0">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-purple-600"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Индивидуальный подход
                  </h3>
                  <p className="text-gray-600">
                    Реализуем любые идеи — от простой надписи до сложного
                    рисунка
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-2 rounded-full bg-purple-100 mr-4 flex-shrink-0">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-purple-600"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Быстрое выполнение
                  </h3>
                  <p className="text-gray-600">
                    Стандартные заказы готовы в течение 24 часов
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">4.9</div>
                <div className="text-sm text-gray-500">Рейтинг</div>
              </div>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={20}
                    className="fill-current"
                  />
                ))}
              </div>
              <div className="text-gray-600">на основе 2,847 отзывов</div>
            </div>
          </div>

          {/* Right Content - Image and Advantages */}
          <div>
            <div className="relative mb-8">
              <img
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&h=400&fit=crop"
                alt="Лазерная гравировка в процессе"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-2xl"></div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl border">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-green-100 mr-4">
                    <Icon name="Award" size={24} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Сертифицированы
                    </div>
                    <div className="text-sm text-gray-600">ISO 9001:2015</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advantages Grid */}
            <div className="grid grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardContent className="p-4 text-center">
                    <div className="p-3 rounded-full bg-purple-100 w-fit mx-auto mb-3">
                      <Icon
                        name={advantage.icon}
                        size={24}
                        className="text-purple-600"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                      {advantage.title}
                    </h3>
                    <p className="text-xs text-gray-600">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
