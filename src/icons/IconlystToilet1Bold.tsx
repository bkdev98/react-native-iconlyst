import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToilet1Bold = ({
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
      d="M3.755 10.95a.3.3 0 0 0 .3.3h3.26a.3.3 0 0 0 .3-.3v-.9a.3.3 0 0 0-.3-.3h-3.26a.3.3 0 0 0-.3.3zM12.005 18.9c-1.912 0-3.519-1.227-4.12-2.937a.31.31 0 0 0-.294-.213H4.055a.3.3 0 0 0-.3.3v.63c0 2.89 1.86 4.82 4.62 4.82h7.26c2.76 0 4.61-1.93 4.61-4.82v-.63a.3.3 0 0 0-.3-.3h-3.526a.31.31 0 0 0-.293.213c-.603 1.71-2.21 2.937-4.121 2.937M3.755 13.95a.3.3 0 0 0 .3.3h3.26a.3.3 0 0 0 .3-.3v-.9a.3.3 0 0 0-.3-.3h-3.26a.3.3 0 0 0-.3.3zM16.395 10.95a.3.3 0 0 0 .3.3h3.25a.3.3 0 0 0 .3-.3v-.9a.3.3 0 0 0-.3-.3h-3.25a.3.3 0 0 0-.3.3zM15.635 2.5h-7.26c-2.76 0-4.62 1.94-4.62 4.82v.63a.3.3 0 0 0 .3.3h3.536a.31.31 0 0 0 .293-.213c.603-1.701 2.21-2.937 4.121-2.937s3.518 1.236 4.12 2.937c.045.125.16.213.294.213h3.526a.3.3 0 0 0 .3-.3v-.63c0-2.88-1.85-4.82-4.61-4.82M16.395 13.95a.3.3 0 0 0 .3.3h3.25a.3.3 0 0 0 .3-.3v-.9a.3.3 0 0 0-.3-.3h-3.25a.3.3 0 0 0-.3.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.155 9.17c0-.63-.52-1.15-1.15-1.15s-1.15.52-1.15 1.15a1.15 1.15 0 0 0 2.3 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystToilet1Bold;
