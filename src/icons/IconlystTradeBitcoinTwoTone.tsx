import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTradeBitcoinTwoTone = ({
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
      d="M10.898 12.002H13.2c.86 0 1.627.628 1.709 1.485a1.647 1.647 0 0 1-1.639 1.808h-2.372zm0 0h2.373c.962 0 1.731-.826 1.638-1.808-.082-.856-.85-1.485-1.71-1.485h-2.3zm1.715 4.266v-.971m0-6.592v-.97"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.5 17.846 2.682.533.53-2.668M21.5 6.158l-2.683-.533-.53 2.668"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.835 5.95a8.762 8.762 0 0 1-7.853 14.708M6.166 18.052a8.762 8.762 0 0 1 7.852-14.71"
    />
  </Svg>
);
export default IconlystTradeBitcoinTwoTone;
