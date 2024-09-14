import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCircleClockBold = ({
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
      d="M6.641 3.65a.75.75 0 1 0-.782-1.28A11.5 11.5 0 0 0 3.12 4.713a.752.752 0 0 0 1.143.973A9.9 9.9 0 0 1 6.641 3.65M20.882 4.717a11 11 0 0 0-2.745-2.36.75.75 0 0 0-.774 1.285 9.5 9.5 0 0 1 2.372 2.042.752.752 0 0 0 1.057.09.75.75 0 0 0 .09-1.057M11.66 13.36a.75.75 0 0 1-.75-.75V9.12a.75.75 0 0 1 1.5 0v2.74h2.715a.75.75 0 0 1 0 1.5zm8.451-1.32c0-4.505-3.665-8.17-8.169-8.17s-8.17 3.665-8.17 8.17c0 2.625 1.25 4.96 3.18 6.455l-1.236 2.128a.75.75 0 0 0 1.297.754l1.205-2.074a8.1 8.1 0 0 0 7.447 0l1.204 2.074a.75.75 0 0 0 1.026.271.75.75 0 0 0 .271-1.025l-1.236-2.128c1.931-1.496 3.181-3.83 3.181-6.455"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCircleClockBold;
