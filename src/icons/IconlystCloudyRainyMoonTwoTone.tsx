import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudyRainyMoonTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.919 15.936c-.301 0-.697-.063-1.094-.224a2.72 2.72 0 0 1-1.601-2.48c0-1.707 1.205-2.708 2.697-2.722 0-1.073.841-3.219 3.218-3.219s3.22 2.146 3.22 3.22c1.491.013 2.696 1.014 2.696 2.72a2.72 2.72 0 0 1-1.599 2.485c-.402.16-.8.22-1.1.22"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.475 14.727H6.52c-.387 0-.896-.08-1.407-.287a3.5 3.5 0 0 1-2.06-3.19c0-2.195 1.551-3.484 3.47-3.5 0-1.381 1.082-4.142 4.14-4.142 2.71 0 3.868 2.17 4.097 3.623"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.039 15.519-1.054 1.763h2.276l-1.222 2.016M6.424 14.807l-1.288 2.055H7.41L6.19 18.878"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.21 20.391.808-1.331M10.227 20.391l.806-1.331"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCloudyRainyMoonTwoTone;
