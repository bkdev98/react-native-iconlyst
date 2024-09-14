import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapMoodsOutline = ({
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
      d="M15.312 10.383a.75.75 0 0 1 .75-.75A5.945 5.945 0 0 1 22 15.58a5.943 5.943 0 0 1-5.94 5.94 5.945 5.945 0 0 1-5.948-5.94.75.75 0 0 1 1.5 0 4.445 4.445 0 0 0 4.449 4.44 4.443 4.443 0 0 0 4.439-4.44 4.445 4.445 0 0 0-4.44-4.448.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.447 3.98a4.446 4.446 0 1 0-.001 8.893 4.446 4.446 0 0 0 0-8.893M2.5 8.427a5.946 5.946 0 1 1 11.893 0 5.946 5.946 0 0 1-11.893 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.007 6.055a.75.75 0 0 1 .75.75v.058a.75.75 0 0 1-1.5 0v-.058a.75.75 0 0 1 .75-.75m2.934 0a.75.75 0 0 1 .75.75v.058a.75.75 0 0 1-1.5 0v-.058a.75.75 0 0 1 .75-.75M6.553 8.944A.75.75 0 0 1 7.6 9.12c.17.238.475.41.848.41.372 0 .678-.172.848-.41a.75.75 0 0 1 1.22.872 2.53 2.53 0 0 1-2.068 1.039 2.53 2.53 0 0 1-2.069-1.04.75.75 0 0 1 .174-1.046M14.617 13.21a.75.75 0 0 1 .75.75v.049a.75.75 0 0 1-1.5 0v-.048a.75.75 0 0 1 .75-.75m2.934.004a.75.75 0 0 1 .75.75v.041a.75.75 0 0 1-1.5 0v-.04a.75.75 0 0 1 .75-.75M16.06 17.45c-.374 0-.679.171-.85.41a.75.75 0 1 1-1.22-.872 2.53 2.53 0 0 1 2.07-1.039c.839 0 1.606.392 2.068 1.04a.75.75 0 0 1-1.22.871 1.03 1.03 0 0 0-.849-.41"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwapMoodsOutline;
