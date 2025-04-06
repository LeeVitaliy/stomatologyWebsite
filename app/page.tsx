"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Stethoscope, Clock, Phone, MapPin, Cross, Sparkles, Shield, Menu, X } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAppointment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Имитация отправки формы
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.");
    } catch (error) {
      toast.error("Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.");
    } finally {
      setLoading(false);
    }
  };

  // Закрытие меню при клике на любой пункт
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
        <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Cross className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">Стоматология</span>
          </div>
          
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Открыть меню"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <div className={`${
            isMenuOpen 
              ? "absolute top-16 left-0 right-0 bg-background border-b p-4"
              : "hidden lg:flex"
          } lg:items-center lg:space-x-8`}>
            <a
              href="#services"
              className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
              onClick={closeMenu} // Закрытие меню при клике
            >
              Услуги
            </a>
            <a
              href="#about"
              className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
              onClick={closeMenu} // Закрытие меню при клике
            >
              О клинике
            </a>
            <a
              href="#contacts"
              className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
              onClick={closeMenu} // Закрытие меню при клике
            >
              Контакты
            </a>
            <Button size="sm" className="gradient-bg text-white hover:opacity-90 transition-opacity" onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}>
              <Phone className="h-4 w-4 mr-2" />
              Записаться
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 px-4 gradient-bg text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Современная стоматология для всей семьи
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Профессиональная забота о здоровье ваших зубов с использованием 
              передовых технологий и материалов
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}>
                Записаться на приём
              </Button>
              <Button variant="outline" size="lg" className="border-white text-black hover:bg-white/10" onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}>
                Узнать стоимость
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068"
              alt="Современный стоматологический кабинет"
              className="rounded-2xl shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              {
                title: "Лечение кариеса",
                description: "Современные методы лечения с гарантией результата",
                icon: <Cross className="h-6 w-6 text-primary" />
              },
              {
                title: "Профессиональная чистка",
                description: "Ультразвуковая чистка и Air Flow",
                icon: <Sparkles className="h-6 w-6 text-primary" />
              },
              {
                title: "Имплантация",
                description: "Установка имплантов ведущих производителей",
                icon: <Shield className="h-6 w-6 text-primary" />
              },
            ].map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {service.icon}
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-background/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Stethoscope className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Опытные специалисты</h3>
                </div>
                <p className="text-muted-foreground">
                  Наши врачи регулярно проходят обучение и владеют современными методиками лечения
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Гарантия качества</h3>
                </div>
                <p className="text-muted-foreground">
                  Мы используем только сертифицированные материалы и современное оборудование
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Комфортное лечение</h3>
                </div>
                <p className="text-muted-foreground">
                  Безболезненное лечение с применением современных методов анестезии
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section id="appointment" className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Записаться на приём
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAppointment} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      required
                      className="border-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 999-99-99"
                      required
                      className="border-2"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Комментарий</Label>
                  <Textarea
                    id="message"
                    placeholder="Опишите проблему или желаемую услугу"
                    className="border-2"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full gradient-bg text-white hover:opacity-90 transition-opacity"
                  disabled={loading}
                >
                  {loading ? "Отправка..." : "Отправить заявку"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-24 px-4 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Контакты
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-background/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Адрес</h3>
                    <p className="text-muted-foreground">
                      г. Москва, ул. Примерная, д. 123
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Телефон</h3>
                    <p className="text-muted-foreground">
                      +7 (999) 999-99-99
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Время работы</h3>
                    <p className="text-muted-foreground">
                      Пн-Пт: 9:00 - 20:00, Сб: 10:00 - 18:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
