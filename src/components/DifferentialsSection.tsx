
import { Heart, Users, BarChart3, Brain } from 'lucide-react';

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Heart,
      title: "Atendimento Personalizado",
      description: "Cada cliente é único. Desenvolvemos estratégias sob medida que se alinham perfeitamente com os objetivos e valores da sua marca.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Time multidisciplinar com profissionais experientes em todas as áreas do marketing digital e tecnologia.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Foco em Resultados",
      description: "Utilizamos métricas e KPIs precisos para garantir que cada ação gere resultados mensuráveis e retorno sobre investimento.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Brain,
      title: "Inovação com IA",
      description: "Integramos inteligência artificial e análise de dados avançada para otimizar campanhas e prever tendências do mercado.",
      color: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-gradient-to-br from-innovation-black via-innovation-gray/5 to-innovation-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Por que escolher a <span className="text-innovation-yellow">Agência Innovation</span>?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Nossa combinação única de criatividade, tecnologia e estratégia 
            garante resultados excepcionais para o crescimento da sua marca.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {differentials.map((differential, index) => {
            const IconComponent = differential.icon;
            return (
              <div 
                key={index}
                className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-innovation-yellow/50 transition-all duration-500 transform hover:scale-105 animate-fade-in-up overflow-hidden"
                style={{animationDelay: `${0.2 * index}s`}}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${differential.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-innovation-yellow rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-float">
                        <IconComponent className="w-8 h-8 text-innovation-black" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-innovation-yellow transition-colors duration-300">
                        {differential.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed text-lg">
                        {differential.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats section */}
        <div className="mt-20 text-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-innovation-yellow mb-2">24/7</div>
              <div className="text-white/80 text-sm">Suporte Disponível</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-innovation-yellow mb-2">100%</div>
              <div className="text-white/80 text-sm">Projetos Entregues</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-innovation-yellow mb-2">15</div>
              <div className="text-white/80 text-sm">Dias Média Entrega</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-innovation-yellow mb-2">+2M</div>
              <div className="text-white/80 text-sm">Impressões Geradas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
