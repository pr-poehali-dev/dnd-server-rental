import { Button } from "@/components/ui/button";
import { DarkFantasyButton } from "@/components/ui/dark-fantasy-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-darkstone-900 via-darkstone-800 to-blood-900">
      {/* Header */}
      <header className="border-b border-blood-700/30 bg-darkstone-900/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 bg-cover bg-center rounded-full border-2 border-blood-700"
                style={{
                  backgroundImage:
                    "url(/img/8f39c1e9-d6f0-4fd6-9f19-9f0f2802a3e5.jpg)",
                }}
              ></div>
              <div>
                <h1 className="text-2xl font-bold text-parchment-500 font-serif">
                  RollForRent
                </h1>
                <p className="text-sm text-blood-500">
                  Брось кубик... если осмелишься
                </p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <a
                href="#calendar"
                className="text-amber-200 hover:text-amber-100 transition-colors"
              >
                📅 Календарь
              </a>
              <a
                href="#adventures"
                className="text-amber-200 hover:text-amber-100 transition-colors"
              >
                ⚔️ Приключения
              </a>
              <a
                href="#contact"
                className="text-amber-200 hover:text-amber-100 transition-colors"
              >
                📞 Контакты
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/10620fd3-b161-4e33-9f61-8df28d785546.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl font-bold text-amber-100 mb-6 font-serif leading-tight">
              Добро пожаловать в
              <span className="block text-amber-400">RollForRent</span>
            </h2>
            <p className="text-xl text-parchment-800 mb-8 max-w-2xl mx-auto leading-relaxed">
              Арендуй кости рока... Серверы, где даже цифры кричат. D20 одобряет
              твой выбор... или проклинает на вечность. Готовые миры и
              незабываемые приключения ждут смельчаков.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <DarkFantasyButton size="lg" variant="primary">
                <Icon name="Calendar" className="mr-2" size={20} />
                Войти в Подземелье
              </DarkFantasyButton>
              <DarkFantasyButton size="lg" variant="outline">
                <Icon name="BookOpen" className="mr-2" size={20} />
                Проклятые Свитки
              </DarkFantasyButton>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-stone-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-amber-400 mb-2">500+</div>
              <div className="text-stone-300">Проведенных сессий</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-amber-400 mb-2">24/7</div>
              <div className="text-stone-300">Доступность серверов</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-amber-400 mb-2">50+</div>
              <div className="text-stone-300">Готовых приключений</div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Preview */}
      <section id="calendar" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-parchment-500 mb-4 font-serif">
              Кровавый календарь
            </h3>
            <p className="text-parchment-800 max-w-2xl mx-auto">
              Выбери день для погружения в бездну. Время истекает... каждый час
              может стать последним.
            </p>
          </div>
          <Card className="max-w-4xl mx-auto bg-stone-800/80 border-amber-600/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-amber-100">
                Декабрь 2024
              </CardTitle>
              <CardDescription className="text-stone-400">
                Доступные слоты для бронирования
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2 text-center">
                {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day) => (
                  <div key={day} className="p-2 font-semibold text-amber-300">
                    {day}
                  </div>
                ))}
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <div
                    key={day}
                    className={`p-2 rounded hover:bg-amber-600/20 cursor-pointer transition-colors ${
                      [15, 22, 29].includes(day)
                        ? "bg-amber-600/30 text-amber-200"
                        : "text-stone-400"
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button className="bg-amber-600 hover:bg-amber-700 text-stone-900">
                  <Icon name="ExternalLink" className="mr-2" size={16} />
                  Открыть в Google Calendar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Adventures */}
      <section
        id="adventures"
        className="py-20 bg-gradient-to-b from-stone-800 to-stone-900"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-parchment-500 mb-4 font-serif">
              Проклятые приключения
            </h3>
            <p className="text-parchment-800 max-w-2xl mx-auto">
              Готовые кампании, где каждый бросок кубика может стать твоим
              последним. Осмеливаешься?
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Проклятие Страда",
                description:
                  "Классическая готическая кампания в мире Равенлофт",
                level: "1-10",
                duration: "6-8 месяцев",
                difficulty: "Сложно",
              },
              {
                title: "Шахты Фанделвера",
                description: "Идеальное приключение для новичков",
                level: "1-5",
                duration: "4-6 недель",
                difficulty: "Легко",
              },
              {
                title: "Буря королей",
                description: "Эпическая кампания о борьбе за трон",
                level: "5-15",
                duration: "8-12 месяцев",
                difficulty: "Очень сложно",
              },
            ].map((adventure, index) => (
              <Card
                key={index}
                className="bg-stone-800/80 border-amber-600/30 hover:border-amber-500/50 transition-all hover:shadow-lg hover:shadow-amber-500/10"
              >
                <CardHeader>
                  <div
                    className="w-full h-48 bg-stone-700 rounded-lg mb-4 flex items-center justify-center bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url(/img/10620fd3-b161-4e33-9f61-8df28d785546.jpg)",
                    }}
                  >
                    <div className="bg-stone-900/50 p-3 rounded-full">
                      <Icon
                        name="BookOpen"
                        size={48}
                        className="text-amber-500"
                      />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-amber-100">
                    {adventure.title}
                  </CardTitle>
                  <CardDescription className="text-stone-400">
                    {adventure.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-stone-400">Уровень:</span>
                      <span className="text-amber-300">{adventure.level}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-stone-400">Длительность:</span>
                      <span className="text-amber-300">
                        {adventure.duration}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-stone-400">Сложность:</span>
                      <Badge
                        variant={
                          adventure.difficulty === "Легко"
                            ? "default"
                            : adventure.difficulty === "Сложно"
                              ? "destructive"
                              : "secondary"
                        }
                        className="text-xs"
                      >
                        {adventure.difficulty}
                      </Badge>
                    </div>
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-stone-900">
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-amber-400 text-amber-400 hover:bg-amber-600 hover:text-stone-900"
            >
              <Icon name="List" className="mr-2" size={20} />
              Посмотреть все приключения
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-stone-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-parchment-500 mb-4 font-serif">
              Призыв в бездну
            </h3>
            <p className="text-parchment-800 max-w-2xl mx-auto">
              Готов заключить сделку с тьмой? Мы ждем твоего зова из глубин
              подземелий.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-stone-800/80 border-amber-600/30 text-center">
              <CardContent className="p-6">
                <Icon
                  name="MessageCircle"
                  size={32}
                  className="text-amber-500 mx-auto mb-4"
                />
                <h4 className="text-lg font-semibold text-amber-100 mb-2">
                  Telegram
                </h4>
                <p className="text-stone-400 mb-4">
                  Быстрые ответы и поддержка
                </p>
                <Button
                  variant="outline"
                  className="border-amber-400 text-amber-400 hover:bg-amber-600 hover:text-stone-900"
                >
                  @dragons_den_dnd
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-stone-800/80 border-amber-600/30 text-center">
              <CardContent className="p-6">
                <Icon
                  name="Mail"
                  size={32}
                  className="text-amber-500 mx-auto mb-4"
                />
                <h4 className="text-lg font-semibold text-amber-100 mb-2">
                  Email
                </h4>
                <p className="text-stone-400 mb-4">
                  Подробные вопросы и предложения
                </p>
                <Button
                  variant="outline"
                  className="border-amber-400 text-amber-400 hover:bg-amber-600 hover:text-stone-900"
                >
                  info@dragonsden.ru
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-stone-800/80 border-amber-600/30 text-center">
              <CardContent className="p-6">
                <Icon
                  name="Users"
                  size={32}
                  className="text-amber-500 mx-auto mb-4"
                />
                <h4 className="text-lg font-semibold text-amber-100 mb-2">
                  Discord
                </h4>
                <p className="text-stone-400 mb-4">Сообщество игроков</p>
                <Button
                  variant="outline"
                  className="border-amber-400 text-amber-400 hover:bg-amber-600 hover:text-stone-900"
                >
                  Присоединиться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-stone-900 border-t border-amber-600/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                <Icon name="Castle" size={16} className="text-stone-900" />
              </div>
              <span className="text-xl font-bold text-amber-100 font-serif">
                RollForRent
              </span>
            </div>
            <p className="text-stone-400 mb-4">
              Создаем незабываемые приключения в мире Dungeons & Dragons
            </p>
            <Separator className="bg-amber-600/30 my-6" />
            <div className="flex justify-center gap-6 text-sm text-stone-400">
              <a href="#" className="hover:text-amber-400 transition-colors">
                Условия использования
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                FAQ
              </a>
            </div>
            <p className="text-stone-500 text-sm mt-4">
              © 2024 RollForRent. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
