import { SpeedInsights } from '@vercel/speed-insights/react'

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center text-green-700 mb-4">
            Anand Dairy Farms
          </h1>
          <p className="text-center text-gray-600">
            Fresh Organic Milk & Dairy Products
          </p>
        </div>
      </div>
      <SpeedInsights />
    </>
  )
}

export default App
