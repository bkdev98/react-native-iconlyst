import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMentionBold = ({
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
      d="M2 12c0 5.514 4.486 10 10 10 1.937 0 3.945-.628 5.655-1.768a1 1 0 0 0-1.11-1.664C15.161 19.491 13.546 20 12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8c4.486 0 8 3.514 8 8 0 .781-.166 2.6-1.7 2.6-.953 0-1.7-.746-1.7-1.7V8.6a1 1 0 0 0-1.937-.35A4.58 4.58 0 0 0 12 7.4 4.604 4.604 0 0 0 7.4 12a4.604 4.604 0 0 0 4.6 4.6 4.6 4.6 0 0 0 3.358-1.459A3.7 3.7 0 0 0 18.3 16.6c2.247 0 3.7-1.806 3.7-4.6 0-5.607-4.393-10-10-10C6.486 2 2 6.486 2 12m12.6-.011v.023a2.57 2.57 0 0 1-2.6 2.587A2.57 2.57 0 0 1 9.4 12c0-1.458 1.142-2.6 2.6-2.6a2.57 2.57 0 0 1 2.6 2.589"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMentionBold;
