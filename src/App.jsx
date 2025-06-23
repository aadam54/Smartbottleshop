import React from 'react';
import './App.css';
import smartBottleMain from './assets/smart_bottle_main.png';
import smartBottle1 from './assets/smart_bottle_1.jpg';
import smartBottle2 from './assets/smart_bottle_2.jpg';
import smartBottle3 from './assets/smart_bottle_3.jpg';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Thermometer, Droplets, Shield, Smartphone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-gray-900">القنينة الذكية</div>
            <div className="hidden md:flex space-x-8 space-x-reverse">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">الميزات</a>
              <a href="#gallery" className="text-gray-700 hover:text-blue-600 transition-colors">المعرض</a>
              <a href="#specs" className="text-gray-700 hover:text-blue-600 transition-colors">المواصفات</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">اتصل بنا</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-right">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                تقنية متقدمة
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                القنينة
                <span className="text-blue-600 block">الذكية</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                اكتشف مستقبل الترطيب مع قنينة ذكية تعرض درجة حرارة الماء بدقة عالية. 
                تصميم أنيق وتقنية متطورة لحياة صحية أفضل.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                  اكتشف المزيد
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                  شاهد الفيديو
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={smartBottleMain} 
                  alt="القنينة الذكية" 
                  className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-20 scale-110"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">ميزات استثنائية</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              تجمع القنينة الذكية بين التصميم الأنيق والتقنية المتطورة لتوفر لك تجربة فريدة
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Thermometer className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">عرض درجة الحرارة</h3>
                <p className="text-gray-600">
                  شاشة رقمية تعرض درجة حرارة الماء بدقة عالية ووضوح مثالي
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">مقاوم للماء</h3>
                <p className="text-gray-600">
                  تصميم محكم ومقاوم للماء يضمن الأمان والمتانة في جميع الظروف
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">مواد آمنة</h3>
                <p className="text-gray-600">
                  مصنوعة من مواد عالية الجودة وآمنة للصحة خالية من المواد الضارة
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">تقنية ذكية</h3>
                <p className="text-gray-600">
                  تقنية متطورة توفر قراءات دقيقة وموثوقة لدرجة حرارة المشروبات
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">معرض الصور</h2>
            <p className="text-xl text-gray-600">
              شاهد القنينة الذكية من جميع الزوايا واكتشف تفاصيل التصميم الرائع
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-2xl">
              <img 
                src={smartBottle1} 
                alt="القنينة الذكية - منظر جانبي" 
                className="w-full h-80 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl">
              <img 
                src={smartBottle2} 
                alt="القنينة الذكية - في المكتب" 
                className="w-full h-80 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl">
              <img 
                src={smartBottle3} 
                alt="القنينة الذكية - تفاصيل الشاشة" 
                className="w-full h-80 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section id="specs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">المواصفات التقنية</h2>
            <p className="text-xl text-gray-600">
              تفاصيل تقنية شاملة عن القنينة الذكية ومميزاتها
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={smartBottleMain} 
                alt="مواصفات القنينة الذكية" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <div className="border-r-4 border-blue-500 pr-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">السعة</h3>
                <p className="text-gray-600">500 مل - مثالية للاستخدام اليومي</p>
              </div>
              
              <div className="border-r-4 border-green-500 pr-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">المواد</h3>
                <p className="text-gray-600">ستانلس ستيل عالي الجودة مع طلاء مقاوم للخدش</p>
              </div>
              
              <div className="border-r-4 border-purple-500 pr-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">الشاشة</h3>
                <p className="text-gray-600">شاشة LED رقمية عالية الوضوح لعرض درجة الحرارة</p>
              </div>
              
              <div className="border-r-4 border-orange-500 pr-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">البطارية</h3>
                <p className="text-gray-600">بطارية طويلة المدى تدوم لأسابيع مع الاستخدام العادي</p>
              </div>
              
              <div className="border-r-4 border-red-500 pr-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">مقاومة الماء</h3>
                <p className="text-gray-600">مقاومة كاملة للماء والرطوبة IPX7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">اتصل بنا</h2>
          <p className="text-xl text-gray-600 mb-8">
            هل لديك أسئلة حول القنينة الذكية؟ نحن هنا لمساعدتك
          </p>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">احصل على قنينتك الذكية اليوم</h3>
            <p className="text-lg mb-6 opacity-90">
              انضم إلى آلاف العملاء الراضين واستمتع بتجربة الترطيب الذكية
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
              اطلب الآن
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">القنينة الذكية</h3>
            <p className="text-gray-400 mb-6">
              تقنية متقدمة لحياة صحية أفضل
            </p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500">
                © 2024 القنينة الذكية. جميع الحقوق محفوظة.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

