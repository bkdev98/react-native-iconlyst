import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNewRingtoneMessageLight = ({
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
      d="M17.839 9.118c.247 2.376 1.537 2.466 1.537 4.84-.219 2.638-2.483 3.283-7.376 3.283s-7.157-.655-7.375-3.283c0-2.624 1.578-2.456 1.578-5.678 0-2.239 1.809-4.75 4.677-5.28M9.922 19.968A2.7 2.7 0 0 0 12.03 21c.85 0 1.612-.399 2.118-1.032"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.66 3.096a1.74 1.74 0 1 1 0 3.479 1.74 1.74 0 0 1 0-3.48"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNewRingtoneMessageLight;
