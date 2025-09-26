
function InfoBox({ label, value }) {
  return (
    <div className="bg-gray-50 p-3 rounded-lg border">
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="text-base font-semibold text-gray-900 mt-1">{value}</p>
    </div>
  );
}

export default InfoBox;