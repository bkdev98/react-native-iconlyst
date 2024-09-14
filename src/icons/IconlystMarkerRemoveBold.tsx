import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMarkerRemoveBold = ({
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
      d="M21 11.246h-1.751c-.352-3.418-3.08-6.156-6.499-6.506V3a.75.75 0 0 0-1.5 0v1.75c-.39.03-.77.11-1.14.21-.17.05-.3.18-.35.35-.04.18.01.36.13.48l8.31 8.31c.1.1.22.15.35.15.05 0 .09-.01.13-.02.17-.04.31-.17.36-.35.1-.37.17-.75.21-1.13v-.004H21a.75.75 0 0 0 0-1.5M12 14.57A2.57 2.57 0 0 1 9.43 12c0-.45.12-.89.34-1.27l3.5 3.5c-.38.22-.82.34-1.27.34M5.29 4.13a.754.754 0 0 0-1.06 0c-.3.29-.3.77 0 1.06l2.15 2.15a7.25 7.25 0 0 0-1.63 3.91H3a.75.75 0 0 0 0 1.5h1.75a7.3 7.3 0 0 0 6.5 6.5V21a.75.75 0 1 0 1.5 0v-1.75a7.33 7.33 0 0 0 3.91-1.63l2.74 2.74c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.76 0-1.06z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMarkerRemoveBold;
