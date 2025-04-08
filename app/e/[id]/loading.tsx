export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary-color mx-auto mb-4" />
        <p className="text-lg">Loading song details...</p>
      </div>
    </div>
  )
}
