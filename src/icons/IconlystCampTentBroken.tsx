import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCampTentBroken = ({
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
      d="m20.915 20.888-2.92-8.326-5.543-5.52-2.079 2.07M3.988 20.888l2.92-8.326 1.386-1.38M14.506 20.889H21.5M3.5 20.889h8.212M7.431 12.062l-.628 8.826M17.486 12.062l.629 8.826M16.713 20.86s-3.192-4.286-4.104-8.906c-.913 4.62-4.103 8.907-4.103 8.907"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.452 7.043V3.11h3.24v2.434h-1.376"
    />
  </Svg>
);
export default IconlystCampTentBroken;
