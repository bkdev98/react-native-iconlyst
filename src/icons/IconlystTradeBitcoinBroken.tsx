import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTradeBitcoinBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.2 12.002h-2.302v3.293h2.373c.962 0 1.731-.826 1.638-1.808-.082-.857-.85-1.485-1.71-1.485"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.2 8.709h-2.302v3.294h2.373c.962 0 1.731-.827 1.638-1.81-.082-.855-.85-1.484-1.71-1.484M12.613 16.268v-.971M12.613 8.705v-.97M3.5 17.846l2.682.533.53-2.668M21.5 6.158l-2.683-.533-.53 2.668"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.835 5.95a8.76 8.76 0 0 1 2.13 8.471M18.752 18.207a8.75 8.75 0 0 1-7.77 2.452M6.166 18.052A8.76 8.76 0 0 1 4.149 9.21M6.249 5.794a8.75 8.75 0 0 1 7.77-2.452"
    />
  </Svg>
);
export default IconlystTradeBitcoinBroken;
