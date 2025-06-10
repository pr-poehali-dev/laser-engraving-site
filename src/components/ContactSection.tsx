import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: "Phone",
      title: "Телефон",
      info: "+7 (495) 123-45-67",
      link: "tel:+74951234567",
    },
    {
      icon: "Mail",
      title: "Email",
      info: "info@lazergraving.ru",
      link: "mailto:info@lazergraving.ru",
    },
    {
      icon: "MapPin",
      title: "Адрес",
      info: "Москва, ул. Примерная, 123",
      link: "https://maps.google.com",
    },
    {
      icon: "Clock",
      title: "Режим работы",
      info: "Пн-Пт: 9:00-18:00\nСб-Вс: 10:00-16:00",
      link: null,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Готовы обсудить ваш проект? Оставьте заявку или позвоните нам прямо
            сейчас
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Оставить заявку
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                  />
                </div>

                <div>
                  <Input
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                  />
                </div>

                <div>
                  <Input
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                  />
                </div>

                <div>
                  <Textarea
                    placeholder="Опишите ваш проект..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-300 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-6 text-center text-sm text-gray-300">
                Или позвоните нам:
                <a
                  href="tel:+74951234567"
                  className="text-purple-400 hover:text-purple-300 ml-1 font-medium"
                >
                  +7 (495) 123-45-67
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Контактная информация
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-purple-600/20 border border-purple-400/30">
                      <Icon
                        name={item.icon}
                        size={24}
                        className="text-purple-400"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {item.title}
                      </h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-300 hover:text-purple-400 transition-colors whitespace-pre-line"
                        >
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-gray-300 whitespace-pre-line">
                          {item.info}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-semibold text-white mb-4">
                Быстрые действия
              </h4>
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start border-white/30 text-white hover:bg-white/10"
                >
                  <Icon name="MessageCircle" size={20} className="mr-3" />
                  Написать в WhatsApp
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-white/30 text-white hover:bg-white/10"
                >
                  <Icon name="Send" size={20} className="mr-3" />
                  Telegram-консультация
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-white/30 text-white hover:bg-white/10"
                >
                  <Icon name="Download" size={20} className="mr-3" />
                  Скачать каталог услуг
                </Button>
              </div>
            </div>

            {/* Working Hours Highlight */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/30">
              <div className="flex items-center mb-3">
                <Icon name="Clock" size={24} className="text-purple-400 mr-3" />
                <h4 className="font-semibold text-white">Срочные заказы</h4>
              </div>
              <p className="text-gray-300 text-sm">
                Принимаем срочные заказы 24/7. Доплата за срочность — 50% от
                стоимости заказа.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
