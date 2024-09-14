import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShiningStarTwoTone = ({
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
      d="M12.113 4.655A11.04 11.04 0 0 0 19.458 12a11.04 11.04 0 0 0-7.345 7.345A11.04 11.04 0 0 0 4.77 12a11.04 11.04 0 0 0 7.344-7.345"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.063 5.05 1.55-1.55M3.615 20.5l1.55-1.55M5.164 5.05 3.614 3.5M20.614 20.5l-1.55-1.55"
    />
  </Svg>
);
export default IconlystShiningStarTwoTone;
