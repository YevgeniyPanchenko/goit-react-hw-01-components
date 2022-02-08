import PropTypes from 'prop-types';

export default function Statistics({title, stats}) {
  return (
    <section className="statistics">
      
      {title && <h3 className="title">{title}</h3>}
      <ul className="stat-list">
        {stats.map
        (stat => (<li className="item" key={stat.id}>
          <span className="label">{stat.label} </span>
          <span className="percentage">{stat.percentage} %</span>
        </li>))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
}
