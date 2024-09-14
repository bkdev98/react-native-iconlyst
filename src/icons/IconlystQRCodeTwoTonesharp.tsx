import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQRCodeTwoTonesharp = ({
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
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M10.056 10.034V3.228H3.25v6.806zM13.944 20.727h6.806v-6.806h-6.806z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M16.375 3.228h-2.43v4.12M20.75 4.929V3.228h-1.7M20.75 7.603v2.43h-1.7M13.945 10.033h2.22M16.267 5.593v2.219h1.83M18.694 5.583v.01M6.652 6.582v.097M6.652 17.276v.096M17.347 17.276v.096"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M3.25 13.921v6.806h6.806v-6.806z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystQRCodeTwoTonesharp;
