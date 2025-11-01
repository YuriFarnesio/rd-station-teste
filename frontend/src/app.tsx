import { RecommendationsFormProvider } from './contexts/recommendations-form.context'

import { Form } from './components/Form'
import { RecommendationList } from './components/RecommendationList/RecommendationList'

function App() {
  return (
    <RecommendationsFormProvider>
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-purple-50">
        <header className="bg-white border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl py-4 sm:py-6 px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 font-bold">
                <span className="text-blue-600">RD Station</span>{' '}
                <span className="text-purple-600">Product Advisor</span>
              </h1>

              <p className="max-w-3xl text-sm sm:text-base lg:text-lg text-gray-600 mx-auto px-2">
                Encontre a solução perfeita para o seu negócio com nossa
                ferramenta inteligente de recomendação
              </p>
            </div>
          </div>
        </header>

        <main className="max-w-7xl pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 mx-auto">
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 bg-white border border-gray-100 rounded-xl lg:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col gap-2 sm:gap-4 text-center">
              <h2 className="text-xl sm:text-2xl text-gray-900 font-semibold">
                Como funciona?
              </h2>

              <p className="max-w-4xl text-sm sm:text-base text-gray-600 leading-relaxed mx-auto px-2">
                Nossa plataforma oferece soluções completas para transformar seu
                negócio. De CRM a Marketing, de Conversas a Inteligência
                Artificial, temos ferramentas projetadas para acelerar seus
                resultados. Selecione suas preferências e funcionalidades
                desejadas para receber recomendações personalizadas.
              </p>
            </div>

            <div className="max-w-6xl grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mx-auto">
              <Form />

              <RecommendationList />
            </div>
          </div>
        </main>

        <footer className="bg-gray-900 text-white py-6 sm:py-8">
          <div className="max-w-7xl text-center px-4 sm:px-6 lg:px-8 mx-auto">
            <p className="text-sm sm:text-base text-gray-300 px-2">
              © 2025 RD Station. Transformando negócios através da tecnologia.
            </p>
          </div>
        </footer>
      </div>
    </RecommendationsFormProvider>
  )
}

export default App
