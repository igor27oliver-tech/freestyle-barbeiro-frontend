import Card from '../ui/Card'

export default function StatCard({ label, value, helper }) {
  return (
    <Card>
      <div className="stat-card">
        <span>{label}</span>
        <strong>{value}</strong>
        <small>{helper}</small>
      </div>
    </Card>
  )
}
