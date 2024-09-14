import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCodeSandboxLight = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.096 8.7v6.545a2.43 2.43 0 0 1-1.213 2.103l-5.67 3.272a2.43 2.43 0 0 1-2.427 0L5.12 17.347a2.43 2.43 0 0 1-1.215-2.102V8.7c0-.867.463-1.67 1.215-2.102l5.667-3.273a2.43 2.43 0 0 1 2.428 0l5.669 3.273A2.43 2.43 0 0 1 20.096 8.7M12 21v-9.027"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.227 7.484 12 11.981l7.773-4.497M20.061 11.973l-3.53 2.04a1 1 0 0 0-.5.865v4.071M7.97 4.996l3.53 2.04a1 1 0 0 0 1.001 0l3.53-2.04M7.97 18.949v-4.07a1 1 0 0 0-.5-.867l-3.53-2.04"
    />
  </Svg>
);
export default IconlystCodeSandboxLight;
