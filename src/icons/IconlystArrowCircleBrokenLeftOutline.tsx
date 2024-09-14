import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowCircleBrokenLeftOutline = ({
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
      d="M12.104 8.417a.75.75 0 0 1-.002 1.06l-1.745 1.74h10.609a.75.75 0 1 1 0 1.5H10.358l1.744 1.736a.75.75 0 0 1-1.058 1.063L8.013 12.5a.75.75 0 0 1 0-1.063l3.03-3.02a.75.75 0 0 1 1.061.001"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.034 3.716a8.25 8.25 0 1 0 6.941 12.712.75.75 0 1 1 1.261.812 9.74 9.74 0 0 1-8.202 4.476c-5.384 0-9.75-4.365-9.75-9.75s4.366-9.75 9.75-9.75a9.74 9.74 0 0 1 8.202 4.476.75.75 0 1 1-1.26.812 8.24 8.24 0 0 0-6.942-3.788"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowCircleBrokenLeftOutline;
