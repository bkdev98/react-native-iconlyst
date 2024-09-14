import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTradeBitcoinLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.7 12.002h-2.302v3.293h2.373c.962 0 1.731-.826 1.638-1.808-.082-.857-.85-1.485-1.71-1.485"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.7 8.709h-2.302v3.294h2.373c.962 0 1.731-.827 1.638-1.81-.082-.855-.85-1.484-1.71-1.484M12.113 16.268v-.971M12.113 8.705v-.97M3 17.846l2.682.533.53-2.668M21 6.158l-2.683-.533-.53 2.668"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.335 5.95a8.762 8.762 0 0 1-7.853 14.708M5.666 18.052a8.762 8.762 0 0 1 7.852-14.71"
    />
  </Svg>
);
export default IconlystTradeBitcoinLight;
