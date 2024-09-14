import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCodeSandboxBroken = ({
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
      d="M20.846 8.7v6.545a2.43 2.43 0 0 1-1.213 2.103l-5.67 3.272a2.43 2.43 0 0 1-2.427 0L5.87 17.347a2.43 2.43 0 0 1-1.215-2.102V8.7c0-.867.463-1.67 1.215-2.102l5.667-3.273a2.43 2.43 0 0 1 2.428 0l5.669 3.273A2.43 2.43 0 0 1 20.846 8.7M12.75 18.072v-6.1M12.75 11.98l7.774-4.496M4.977 7.484l4.828 2.793"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.781 18.949V14.3l1.512-.873M8.72 4.996l4.03 2.328 2.03-1.233M4.69 11.973 8.72 14.3v2.25"
    />
  </Svg>
);
export default IconlystCodeSandboxBroken;
