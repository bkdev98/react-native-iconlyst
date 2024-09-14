import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBulbBroken = ({
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
      d="M4.217 4.407s3.959 2.623 9.457 1.581M8.474 16.46c0-2.034 1.649-3.83 3.683-3.83s3.684 1.796 3.684 3.83-1.65 5.405-3.684 5.405c-1.187 0-2.244-1.15-2.917-2.51M19.126 16.53h1.314M18.38 20.753l.235.188M6.351 12.359l.239.182M17.994 12.45l.354-.354M5.39 15.96H4.077M6.32 20.382l-.353.354"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.921 13.116v-2.568a1.776 1.776 0 1 0-3.551 0v2.568M12.124 8.75V6.233"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.922 11.159c-.607-.158-1.092-.243-1.56-.26M19.783 3.365A17.3 17.3 0 0 1 16.27 5.24"
    />
  </Svg>
);
export default IconlystBulbBroken;