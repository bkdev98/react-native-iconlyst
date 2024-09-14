import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiListGeneratedOutline = ({
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
      d="M2.25 19.148a.75.75 0 0 1 .75-.75h7.118a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75M2.25 14.383a.75.75 0 0 1 .75-.75h4.432a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75M2.25 4.852a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75M2.25 9.617a.75.75 0 0 1 .75-.75h7.011a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75M14.512 18.369a.75.75 0 0 1-.704-.49l-.145-.393a4.66 4.66 0 0 0-2.752-2.757l-.393-.145a.75.75 0 0 1 0-1.407l.393-.145a4.66 4.66 0 0 0 2.752-2.757l.145-.393a.75.75 0 0 1 1.407 0l.146.393a4.66 4.66 0 0 0 2.752 2.757l.393.145a.75.75 0 0 1 0 1.407l-.393.145a4.66 4.66 0 0 0-2.752 2.757l-.146.393a.75.75 0 0 1-.703.49m1.947-4.488a6.2 6.2 0 0 1-1.947-1.95 6.2 6.2 0 0 1-1.947 1.95 6.2 6.2 0 0 1 1.947 1.949 6.2 6.2 0 0 1 1.947-1.95M19.823 19.897a.75.75 0 0 1-.718-.532 1.02 1.02 0 0 0-.678-.68.75.75 0 0 1 0-1.434 1.02 1.02 0 0 0 .678-.679.75.75 0 0 1 1.435 0c.1.326.354.58.678.68a.75.75 0 0 1 0 1.434 1.02 1.02 0 0 0-.678.68.75.75 0 0 1-.717.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAiListGeneratedOutline;
