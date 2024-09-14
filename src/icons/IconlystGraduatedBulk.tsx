import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGraduatedBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M12.272 15.416a3.9 3.9 0 0 1-1.69-.393l-4.156-2.031a1 1 0 0 1-.087-.05l-2.288-1.12a2.68 2.68 0 0 1-1.518-2.427 2.68 2.68 0 0 1 1.52-2.431l6.533-3.198a3.8 3.8 0 0 1 3.377 0l6.542 3.199A2.7 2.7 0 0 1 22.02 9.24q.015.074.014.153L22 14.804a.75.75 0 0 1-.75.745h-.005a.75.75 0 0 1-.745-.755l.016-2.642a.2.2 0 0 0-.289-.18c-2.08 1.031-4.176 2.033-6.263 3.05a3.85 3.85 0 0 1-1.692.394"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.273 16.667c.765 0 1.528-.173 2.239-.521l3.334-1.626a.2.2 0 0 1 .288.18v2.609a2.61 2.61 0 0 1-1.595 2.42c-1.421.6-2.863.9-4.312.9-1.448 0-2.906-.3-4.362-.897a2.63 2.63 0 0 1-1.61-2.443V14.62a.2.2 0 0 1 .289-.18l3.489 1.705c.695.347 1.46.522 2.24.522"
    />
  </Svg>
);
export default IconlystGraduatedBulk;
