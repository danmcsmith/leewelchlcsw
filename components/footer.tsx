export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-header-footer text-background-base py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-serif text-lg">Lee Welch, LCSW</p>
            <p>Depth-Oriented Psychotherapy</p>
            <p>Licensed in Oregon and New York</p>
          </div>

          <div className="text-center md:text-right">
            <p>© {currentYear} Lee Welch Therapy</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
