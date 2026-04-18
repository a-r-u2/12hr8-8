import { formatTime } from '../utils/helpers'

export default function SlotPicker({ slots, selected, onSelect }) {
  if (!slots.length) return (
    <p className="no-slots-text">No slots available for this date.</p>
  )

  return (
    <div className="slots-grid">
      {slots.map(({ time, available }) => (
        <button
          key={time}
          disabled={!available}
          onClick={() => available && onSelect(time)}
          className={`slot-button ${!available ? 'slot-disabled' : selected === time ? 'slot-selected' : 'slot-available'}`}
        >
          {formatTime(time)}
        </button>
      ))}
    </div>
  )
}