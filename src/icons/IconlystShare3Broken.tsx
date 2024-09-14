import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShare3Broken = ({
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
      d="M14.663 5.868a2.594 2.594 0 1 1-2.594-2.595M5.595 19.528A2.595 2.595 0 1 0 3 16.933M18.406 19.528A2.595 2.595 0 1 1 21 16.933"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.659 20.534a7.46 7.46 0 0 1-6.464-1.555M16.9 7.693a7.45 7.45 0 0 1 2.398 6.812M4.816 11.305a7.45 7.45 0 0 1 4.7-5.02"
    />
  </Svg>
);
export default IconlystShare3Broken;
