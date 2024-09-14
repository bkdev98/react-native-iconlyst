import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingHeartBold = ({
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
      fillRule="evenodd"
      d="M12.5 10.453c.915 0 1.694-.88 1.694-1.92a5.4 5.4 0 0 0-1.423-3.64.37.37 0 0 0-.542 0 5.4 5.4 0 0 0-1.423 3.64c0 1.04.78 1.92 1.694 1.92"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.05 3.305c-.387-.184-2.44-.679-3.805.028a.373.373 0 0 0-.115.581 6.96 6.96 0 0 1 1.73 4.62c0 1.987-1.496 3.613-3.36 3.613s-3.36-1.626-3.36-3.614c0-1.693.587-3.307 1.734-4.623.146-.168.133-.439-.062-.547-1.364-.75-3.468-.244-3.862-.058-3.624 1.208-4.562 5.138-3.591 8.232 1.379 4.592 7.272 8.433 8.959 9.445.116.07.248.07.364 0 1.688-1.012 7.58-4.853 8.96-9.445.97-3.094.034-7.024-3.591-8.232"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRingHeartBold;
