import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNewRingtoneMessageBroken = ({
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
      d="M18.089 9.118c.247 2.376 1.537 2.467 1.537 4.84-.219 2.638-2.483 3.283-7.376 3.283s-7.157-.654-7.375-3.282c0-2.526 1.462-2.466 1.572-5.331M7.046 6a5.8 5.8 0 0 1 4.084-3M10.172 19.968A2.7 2.7 0 0 0 12.28 21c.85 0 1.612-.399 2.118-1.032M17.65 4.835a1.74 1.74 0 1 1-1.74-1.74"
    />
  </Svg>
);
export default IconlystNewRingtoneMessageBroken;
