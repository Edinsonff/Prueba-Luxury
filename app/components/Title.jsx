import PropTypes from 'prop-types';
import { createElement } from 'react';

export default function Title({ 
  title, 
  children,
  as = 'h2',
  className = '',
  lineColor = 'bg-gray-300',
  titleColor = 'text-colorTitle2'
}) {
  return createElement(
    as,
    {
      className: `
        relative flex items-center gap-4 text-xl font-semibold my-4
        ${className}
      `,
      role: as === 'div' ? 'heading' : undefined,
      'aria-level': as === 'div' ? 2 : undefined,
    },
    <>
      <span 
        className={` ${titleColor}`}
        {...(!title && { 'aria-hidden': true })}
      >
        {title || children}
      </span>
      <span 
        className={`flex-grow h-px ${lineColor}`}
        aria-hidden="true"
      />
    </>
  );
}

Title.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div']),
  className: PropTypes.string,
  lineColor: PropTypes.string,
  titleColor: PropTypes.string,
};
