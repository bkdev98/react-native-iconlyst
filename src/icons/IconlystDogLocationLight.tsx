import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDogLocationLight = ({
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
      d="M10.013 7.744v.01M11.643 21.009c-1.154.038-2.171-.132-2.817-.327 1.496-2.454 1.751-5.586 1.181-7.337-.108.081-.718.19-3.584.516s-3.665-3.013-3.706-4.723l4.277-1.82c-.157-.987.226-3.293 3.013-3.478l2.139-.169c2.424-.208 4.973 1.025 6.037 4.923q.212.778.333 1.468"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.447 9.097c-.168.895-.332 2.21-.277 3.505M14.24 16.7c0 2.356 2.782 4.609 3.312 4.609s3.313-2.253 3.313-4.61a3.312 3.312 0 1 0-6.625 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.558 16.3v-.05m-.006-.154a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45"
    />
  </Svg>
);
export default IconlystDogLocationLight;
