import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: "Gem",
      title: "Ювелирные изделия",
      description: "Персонализация колец, браслетов, подвесок",
      price: "от 500₽",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
    },
    {
      icon: "Smartphone",
      title: "Электроника",
      description: "Гравировка на телефонах, планшетах, ноутбуках",
      price: "от 800₽",
      image:
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=300&fit=crop",
    },
    {
      icon: "Trophy",
      title: "Награды и кубки",
      description: "Именные таблички, дипломы, медали",
      price: "от 300₽",
      image:
        "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=300&fit=crop",
    },
    {
      icon: "Gift",
      title: "Подарки",
      description: "Персональные сувениры, фоторамки, брелоки",
      price: "от 200₽",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
    },
    {
      icon: "Briefcase",
      title: "Бизнес-сувениры",
      description: "Корпоративные подарки с логотипом",
      price: "от 600₽",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    },
    {
      icon: "Home",
      title: "Интерьер",
      description: "Декоративные таблички, номера домов",
      price: "от 400₽",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Работаем с различными материалами: металл, дерево, пластик, стекло,
            кожа
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-purple-100 mr-4">
                    <Icon
                      name={service.icon}
                      size={24}
                      className="text-purple-600"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-purple-600 font-semibold">
                      {service.price}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-4 flex items-center text-purple-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span className="mr-2">Подробнее</span>
                  <Icon name="ArrowRight" size={16} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Materials Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Работаем с материалами
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Металл", "Дерево", "Пластик", "Стекло", "Кожа", "Камень"].map(
              (material) => (
                <span
                  key={material}
                  className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-medium"
                >
                  {material}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
