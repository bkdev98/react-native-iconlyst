import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLocationLightsharp = ({
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
      d="M14.737 10.806a2.486 2.486 0 1 0-4.973 0 2.486 2.486 0 0 0 4.973 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12.25 21.25s-7.276-4.74-7.46-10.653C4.662 6.445 8.13 2.75 12.25 2.75s7.587 3.695 7.46 7.847c-.185 6.035-7.46 10.653-7.46 10.653Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLocationLightsharp;
