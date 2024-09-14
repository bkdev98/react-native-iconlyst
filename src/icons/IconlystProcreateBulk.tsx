import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystProcreateBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 2.5c-5.238 0-9.5 4.261-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.007 12.229c-.834 1.093-2.104 1.728-3.774 1.888-2.877.153-3.788 2.076-3.825 2.158a.755.755 0 0 1-.798.433.75.75 0 0 1-.631-.65c-.229-1.901.534-5.668 5.062-6.311 2.796-.345 3.478-1.926 3.506-1.993a.76.76 0 0 1 .777-.464.75.75 0 0 1 .659.612c.018.1.415 2.506-.976 4.327m-3.886.391c-1.484.08-2.577.543-3.36 1.087.417-1.064 1.366-2.174 3.477-2.475 1.42-.174 2.435-.628 3.15-1.128a3.4 3.4 0 0 1-.574 1.214c-.57.747-1.487 1.186-2.693 1.302"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystProcreateBulk;
