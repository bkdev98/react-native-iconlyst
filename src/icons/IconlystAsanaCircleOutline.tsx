import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAsanaCircleOutline = ({
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
      d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.608 11.64a2.5 2.5 0 1 1 .003 5 2.5 2.5 0 0 1-.003-5m.708 1.793a1 1 0 1 0-1.414 1.416 1 1 0 0 0 1.414-1.416M15.388 11.637a2.5 2.5 0 1 1 .003 5 2.5 2.5 0 0 1-.003-5m.709 1.792a1 1 0 1 0-1.415 1.416 1 1 0 0 0 1.415-1.416M11.999 6A2.5 2.5 0 1 1 12 11 2.5 2.5 0 0 1 12 6m.708 1.793a1 1 0 1 0-1.414 1.415 1 1 0 0 0 1.414-1.415"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAsanaCircleOutline;
