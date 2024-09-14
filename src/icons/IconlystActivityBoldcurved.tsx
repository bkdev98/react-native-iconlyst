import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystActivityBoldcurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.52 11.2-2.93 3.78a.7.7 0 0 1-.5.28.75.75 0 0 1-.56-.15L9.71 12.9l-2.53 3.29c-.14.19-.37.29-.59.29-.16 0-.32-.05-.46-.16a.75.75 0 0 1-.14-1.05l3-3.89c.12-.16.3-.26.5-.28.2-.03.4.03.56.15l2.82 2.21 2.46-3.18a.751.751 0 0 1 1.19.92m5.1-2.39c-.53.25-1.13.39-1.75.39a4.26 4.26 0 0 1-4.25-4.25c0-.64.14-1.24.4-1.78-1.1-.23-2.38-.34-3.86-.34-7.21 0-9.77 2.55-9.77 9.77s2.56 9.77 9.77 9.77c7.22 0 9.78-2.55 9.78-9.77 0-1.45-.1-2.71-.32-3.79"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.87 7.2c.42 0 .82-.12 1.15-.32.65-.39 1.09-1.11 1.09-1.93 0-1.24-1-2.25-2.24-2.25a2.251 2.251 0 0 0 0 4.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystActivityBoldcurved;
