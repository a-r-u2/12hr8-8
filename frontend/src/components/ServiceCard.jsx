import { useNavigate } from 'react-router-dom'
import { fmt, CATEGORY_ICONS, CATEGORY_COLORS } from '../utils/helpers'

export default function ServiceCard({ service }) {
  const navigate = useNavigate()
  const icon  = CATEGORY_ICONS[service.category] || '🔨'
  const color = CATEGORY_COLORS[service.category] || '#7C3AED'

  return (
    <div
      onClick={() => navigate(`/services/${service._id}`)}
      className="service-card"
    >
      <div
        className="service-icon"
        style={{ background: `${color}18` }}
      >
        {icon}
      </div>

      <div className="service-header">
        <h3 className="service-name">{service.name}</h3>
        <span
          className="service-category"
          style={{ background: `${color}18`, color }}
        >
          {service.category}
        </span>
      </div>

      <p className="service-description">{service.description}</p>

      <div className="service-footer">
        <span className="service-price">{fmt(service.price)}</span>
        <div className="service-rating">
          <span className="rating-star">★</span>
          <span>{service.rating}</span>
          <span className="rating-divider">·</span>
          <span>{service.reviewCount} reviews</span>
        </div>
      </div>
      
      <p className="service-duration">⏱ {service.duration} min</p>

      <style>{`
        .service-card {
          background: white;
          border-radius: 1rem;
          border: 1px solid #e2e8f0;
          padding: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
          min-height: 300px;
        }

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
          border-color: #667eea;
        }

        .service-icon {
          width: 3rem;
          height: 3rem;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .service-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .service-name {
          font-weight: 600;
          color: #1e293b;
          font-size: 1rem;
          line-height: 1.25;
          flex: 1;
        }

        .service-category {
          font-size: 0.75rem;
          font-weight: 500;
          padding: 0.25rem 0.5rem;
          border-radius: 9999px;
          white-space: nowrap;
        }

        .service-description {
          font-size: 0.875rem;
          color: #64748b;
          margin-bottom: 1rem;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex-grow: 1;
        }

        .service-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
          padding-top: 1rem;
          border-top: 1px solid #f1f5f9;
        }

        .service-price {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1e293b;
        }

        .service-rating {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.875rem;
          color: #64748b;
        }

        .rating-star {
          color: #fbbf24;
        }

        .rating-divider {
          color: #cbd5e1;
        }

        .service-duration {
          font-size: 0.75rem;
          color: #94a3b8;
        }
      `}</style>
    </div>
  )
}