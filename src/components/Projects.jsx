export default function Projects() {
  return (
    <section className="mb-8">
      <ul>
      <h2 className="text-xl font-semibold text-black-500 mb-2 bg-gray-300 px-4 py-2 w-full block">Projects</h2>

      <div className="mb-4">
       <li> <h3 className="font-bold">Civic Alert Original — Android App</h3></li>
        <p>Incident-reporting system using CameraX + Firebase.</p>
      </div>

      <div className="mb-4">
        <li><h3 className="font-bold">Smart Irrigation System</h3></li>
        <p>IoT and automation using NodeMCU + Flask backend + React dashboard.</p>
      </div>

      <div className="mb-4">
        <li><h3 className="font-bold">CO₂ Emission Prediction Platform</h3></li>
        <p>Machine-learning model + user interface for predictions.</p>
      </div>
      
      <div className="mb-4">
        <li><h3 className="font-bold">Projects and Beneficiary Management System  </h3></li>
        <p>Software system for tracking beneficiaries and their replacements in a project. </p>
      </div></ul>
    </section>
  );
}
