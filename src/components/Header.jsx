export default function Header() {
  return (
    <header className="text-left mb-8">
      <h1 className="text-4xl font-bold text-black-600">Tshepiso P Makuoa</h1>
      <p className="text-xl">Software Developer | Machine Learning | Project Manager </p>
      <p className="text-sm">Email: tshepisomakuoa02@gmail.com  | Phone: 069 324 6135  | LinkedIn: <a href="https://www.linkedin.com/in/tshepiso-makuoa-1089782a3/">LinkedIn Account</a>    
        <a
        href="/Tshepiso-Makuoa-CV.pdf" 
        download
        className="absolute  bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700 transition"
      >
        Download CV (PDF)
      </a> </p>
      
    </header>
  );
}
