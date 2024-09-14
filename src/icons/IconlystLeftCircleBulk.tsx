import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftCircleBulk = ({
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
      d="M12 2.5c5.238 0 9.5 4.262 9.5 9.5s-4.262 9.5-9.5 9.5-9.5-4.262-9.5-9.5S6.761 2.5 12 2.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m9.482 12.529 3.391 3.377a.747.747 0 0 0 1.06-.002.75.75 0 0 0-.002-1.061l-2.857-2.845 2.857-2.846a.749.749 0 1 0-1.058-1.062l-3.391 3.377a.75.75 0 0 0 0 1.062"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftCircleBulk;
