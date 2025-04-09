import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, GraduationCap, Briefcase, Languages, Code2, Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-sm' : 'bg-black/90 backdrop-blur-sm border-b border-gray-800'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold">Bruno Carneiro Leão</span>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            {/* Desktop menu */}
            <ul className="hidden md:flex space-x-12">
              <li><Link to='sobre' smooth={true} duration={500} className="text-base p-2 hover:text-blue-400 cursor-pointer hover:scale-110 transition-all duration-200 hover:bg-gray-800/50 rounded-lg">Sobre Mim</Link></li>
              <li><Link to='habilidades' smooth={true} duration={500} className="text-base p-2 hover:text-blue-400 cursor-pointer hover:scale-110 transition-all duration-200 hover:bg-gray-800/50 rounded-lg">Habilidades</Link></li>
              <li><Link to='carreira' smooth={true} duration={500} className="text-base p-2 hover:text-blue-400 cursor-pointer hover:scale-110 transition-all duration-200 hover:bg-gray-800/50 rounded-lg">Carreira</Link></li>
              <li><Link to='formacao' smooth={true} duration={500} className="text-base p-2 hover:text-blue-400 cursor-pointer hover:scale-110 transition-all duration-200 hover:bg-gray-800/50 rounded-lg">Formação</Link></li>
              <li><Link to='cursos' smooth={true} duration={500} className="text-base p-2 hover:text-blue-400 cursor-pointer hover:scale-110 transition-all duration-200 hover:bg-gray-800/50 rounded-lg">Cursos</Link></li>
              <li><Link to='contato' smooth={true} duration={500} className="text-base p-2 hover:text-blue-400 cursor-pointer hover:scale-110 transition-all duration-200 hover:bg-gray-800/50 rounded-lg">Contato</Link></li>
            </ul>
          </div>  

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-800">
              <ul className="py-4 space-y-2">
                <li><Link to='sobre' smooth={true} duration={500} className="block w-full text-left p-3 hover:text-blue-400 cursor-pointer hover:scale-105 transition-all duration-200 hover:bg-gray-800/50 rounded-lg">Sobre Mim</Link></li>
                <li><Link to='habilidades' smooth={true} duration={500} className="block w-full text-left p-3 hover:text-blue-400 cursor-pointer hover:scale-105 transition-all duration-200 hover:bg-gray-800/50 rounded-lg">Habilidades</Link></li>
                <li><Link to='carreira' smooth={true} duration={500} className="block w-full text-left p-3 hover:text-blue-400 cursor-pointer hover:scale-105 transition-all duration-200 hover:bg-gray-800/50 rounded-lg">Carreira</Link></li>
                <li><Link to='formacao' smooth={true} duration={500} className="block w-full text-left p-3 hover:text-blue-400 cursor-pointer hover:scale-105 transition-all duration-200 hover:bg-gray-800/50 rounded-lg">Formação</Link></li>
                <li><Link to='cursos' smooth={true} duration={500} className="block w-full text-left p-3 hover:text-blue-400 cursor-pointer hover:scale-105 transition-all duration-200 hover:bg-gray-800/50 rounded-lg">Cursos</Link></li>
                <li><Link to='contato' smooth={true} duration={500} className="block w-full text-left p-3 hover:text-blue-400 cursor-pointer hover:scale-105 transition-all duration-200 hover:bg-gray-800/50 rounded-lg">Contato</Link></li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Sobre Mim */}
        <section id="sobre" className="min-h-[90vh] flex items-center bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold mb-8">Bem-Vindo ao meu site!</h1>
                <p className="text-xl text-gray-400 max-w-2xl">
                  Fico feliz em saber que você está visitando meu site e agradeço desde já o seu interesse 
                  e sua presença aqui. Este site tem como objetivo apresentar meu currículo de uma forma 
                  mais moderna e minimalista.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin size={16} />
                    <span>São Paulo, SP</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Mail size={16} />
                    <span>brunocleao99@gmail.com</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row justify-center gap-6 relative">
                {/* Primeira imagem */}
                <div className="relative group mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                  <div className="relative w-100 h-100 md:w-100 md:h-100 rounded-full overflow-hidden border-4 border-gray-800 hover:scale-105 transition-transform duration-300">
                    <img 
                      src="./assets/foto_linkedin(1).png" 
                      alt="Imagem 1" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Segunda imagem */}
                <div className="relative group mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-800 hover:scale-105 transition-transform duration-300">
                    <img 
                      src="./assets/logo-portfolio.png" 
                      alt="Imagem 2" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Habilidades */}
        <section id="habilidades" className="min-h-[100vh] bg-gradient-to-b from-gray-900 to-black py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Code2 className="text-blue-400" />
              Conhecimentos Técnicos
            </h2>
            <div className="flex flex-col max-w-2xl">
              {/* Conhecimentos Técnicos */}
              <div className="space-y-4">
                {[
                  { skill: 'C# (Orientado a objetos)', level: 'Avançado' },
                  { skill: 'HTML, CSS', level: 'Intermediário' },
                  { skill: 'JavaScript', level: 'Básico' },
                  { skill: 'Python', level: 'Intermediário' },
                  { skill: 'C++', level: 'Básico' },
                  { skill: 'XAML', level: 'Intermediário' },
                ].map((item, index) => (
                  <div key={index} className="bg-gray-900 p-3 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 transform cursor-pointer">
                    <div className="flex justify-between items-center">
                      <span>{item.skill}</span>
                      <span className="text-blue-400">{item.level}</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Idiomas */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold flex items-center gap-2 mb-4">
                  <Languages className="text-blue-400" />
                  Idiomas
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-900 p-3 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 transform cursor-pointer">
                    <div className="flex justify-between items-center">
                      <span>Inglês</span>
                      <span className="text-blue-400">Avançado</span>
                    </div>
                  </div>
                  <div className="bg-gray-900 p-3 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 transform cursor-pointer">
                    <div className="flex justify-between items-center">
                      <span>Espanhol</span>
                      <span className="text-blue-400">Básico</span>
                    </div>
                  </div>
                  <div className="bg-gray-900 p-3 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 transform cursor-pointer">
                    <div className="flex justify-between items-center">
                      <span>Português</span>
                      <span className="text-blue-400">Fluente</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Carreira */}
        <section id="carreira" className="min-h-[70vh] bg-gradient-to-b from-black to-gray-900 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Briefcase className="text-blue-400" />
              Experiência Profissional
            </h2>
            <div className="bg-black p-4 rounded-lg hover:bg-gray-900 transition-all duration-200 hover:scale-105 transform cursor-pointer">
              <h3 className="text-xl font-bold">Pro4win (2023 - 2024)</h3>
              <p className="mt-4 text-gray-400">
                Estagiário em desenvolvimento de apps mobile usando Xamarin Forms, 
                XAML e C# orientado a objetos, manipulação de dados usando o SQL Server, utilização de 
                serviços como SOAP, criação de manuais de utilização dos aplicativos e lançamento dos 
                aplicativos na plataforma Google Play.
              </p>
            </div>
          </div>
        </section>

        {/* Formação */}
        <section id="formacao" className="min-h-[80vh] bg-gradient-to-b from-gray-900 to-black py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <GraduationCap className="text-blue-400" />
              Formação Acadêmica
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 transform cursor-pointer">
                <h3 className="text-xl font-bold">FIAP</h3>
                <p className="text-gray-400">Cursando Engenharia de Software (2024 - 2027)</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 transform cursor-pointer">
                <h3 className="text-xl font-bold">Senac</h3>
                <p className="text-gray-400">Curso técnico integrado ao ensino médio em Técnico em informática (2021 - 2023)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cursos */}
        <section id="cursos" className="min-h-[80vh] bg-gradient-to-b from-black to-gray-900 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Formação Extracurricular</h2>
            <div className="bg-black p-4 rounded-lg hover:bg-gray-900 transition-all duration-200">
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 transform cursor-pointer">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Microsoft SQL Server 2022: administrando o banco de dados – ALURA (2024)
                </li>
                <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 transform cursor-pointer">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  9 cursos FGV
                </li>
                <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 transform cursor-pointer">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  2 cursos Impacta (Python e lógica de programação)
                </li>
                <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 transform cursor-pointer">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Qualificação profissional técnica de assistente de suporte e Manutenção de computadores (2021)
                </li>
                <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 transform cursor-pointer">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Biblioteca Digital Senac (2020)
                </li>
                <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 transform cursor-pointer">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Você sabe trabalhar em equipe? (2020)
                </li>
                <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 transform cursor-pointer">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Servidores do Zero à Nuvem (2021)
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="min-h-[80vh] bg-gradient-to-b from-gray-900 to-black py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Contato</h2>
            <div className="flex justify-center">
              <div className="space-y-4 max-w-md w-full">
                <a href="https://www.linkedin.com/in/bruno-carneiro-leao" 
                   className="flex items-center gap-3 bg-gray-900 p-3 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 transform">
                  <Linkedin size={24} className="text-blue-400" />
                  <span>LinkedIn - Bruno Carneiro Leão</span>
                </a>
                <a href="https://github.com/brnleao" 
                   className="flex items-center gap-3 bg-gray-900 p-3 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 transform">
                  <Github size={24} className="text-blue-400" />
                  <span>GitHub – brnleao</span>
                </a>
                <div className="flex items-center gap-3 bg-gray-900 p-3 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 transform cursor-pointer">
                  <Phone size={24} className="text-blue-400" />
                  <span>(11) 98934-4569</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-900 p-3 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 transform cursor-pointer">
                  <Mail size={24} className="text-blue-400" />
                  <span>brunocleao99@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black border-t border-gray-800 py-4">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>@2025 - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
}

export default App;