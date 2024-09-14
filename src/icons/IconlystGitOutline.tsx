import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitOutline = ({
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
      d="M11.903 2.253c1.239-.044 2.444.449 3.439 1.444L20.3 8.656c.998.997 1.491 2.202 1.447 3.44-.044 1.231-.614 2.412-1.59 3.387l-4.672 4.672c-.975.976-2.156 1.546-3.386 1.59-1.239.044-2.444-.45-3.441-1.447l-4.959-4.959c-.997-.997-1.49-2.202-1.446-3.44.044-1.23.615-2.41 1.59-3.386L8.514 3.84c.977-.976 2.16-1.545 3.39-1.588M9.575 4.9 4.904 9.573c-.757.757-1.124 1.593-1.152 2.38-.028.778.272 1.59 1.008 2.326l4.958 4.958c.736.736 1.549 1.037 2.328 1.009.787-.028 1.623-.395 2.378-1.151l4.673-4.672c.756-.756 1.123-1.592 1.151-2.38.028-.778-.273-1.591-1.008-2.327L14.28 4.758c-.732-.733-1.545-1.034-2.325-1.006-.788.027-1.625.394-2.381 1.15"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.372 14.36a.713.713 0 1 0-.001 1.425.713.713 0 0 0 0-1.426m-2.214.713a2.213 2.213 0 1 1 4.426-.001 2.213 2.213 0 0 1-4.426 0M15.475 11.29a.713.713 0 1 0-.001 1.425.713.713 0 0 0 .001-1.426m-2.213.712a2.213 2.213 0 1 1 4.426 0 2.213 2.213 0 0 1-4.426 0M11.372 7.371a.713.713 0 1 0-.001 1.426.713.713 0 0 0 0-1.426m-2.214.713a2.213 2.213 0 1 1 4.426 0 2.213 2.213 0 0 1-4.426 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.985 4.539a.75.75 0 0 1 1.06.002l1.901 1.91A.75.75 0 1 1 9.883 7.51l-1.9-1.91a.75.75 0 0 1 .002-1.06M11.95 8.513a.75.75 0 0 1 1.06 0l1.946 1.945a.75.75 0 0 1-1.06 1.06L11.95 9.573a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.373 8.797a.75.75 0 0 1 .75.75v4.063a.75.75 0 1 1-1.5 0V9.547a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGitOutline;
