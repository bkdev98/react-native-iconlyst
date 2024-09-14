import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOkexOutline = ({
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
      d="M7.75 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M2.5 12A5.25 5.25 0 1 1 13 12a5.25 5.25 0 0 1-10.5 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.75 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M11.5 12A5.25 5.25 0 1 1 22 12a5.25 5.25 0 0 1-10.5 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 12.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M7 16.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 3.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M7 7.5a5.25 5.25 0 1 1 10.5 0A5.25 5.25 0 0 1 7 7.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOkexOutline;
