import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBulbTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.217 4.407s7.145 4.733 15.567-1.042M15.84 16.46c0 2.034-1.649 5.405-3.683 5.405s-3.683-3.37-3.683-5.405c0-2.034 1.649-3.83 3.683-3.83s3.683 1.796 3.683 3.83"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.126 16.53h1.314M18.38 20.753l.235.188M6.351 12.359l.238.182M17.994 12.45l.354-.354M5.39 15.96H4.077M6.32 20.382l-.353.354"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.921 13.116v-2.568a1.776 1.776 0 1 0-3.551 0v2.568"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.124 8.75V6.233"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.432 11.159c1.366-.343 2.111-.359 3.49 0"
    />
  </Svg>
);
export default IconlystBulbTwoTone;
