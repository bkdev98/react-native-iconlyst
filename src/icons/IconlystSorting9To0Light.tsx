import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSorting9To0Light = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.834 15.434 8.501 18.1m0 0 2.666-2.666M8.501 18.1V7.434"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.39 14.543c.981 0 1.777.796 1.777 1.778v2.666a1.778 1.778 0 0 1-3.556 0v-2.666c0-.983.796-1.778 1.778-1.778"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.167 8.321h-1.778a1.778 1.778 0 1 1 1.778-1.778V9.21c0 .981-.796 1.778-1.778 1.778h-1.261"
    />
  </Svg>
);
export default IconlystSorting9To0Light;
