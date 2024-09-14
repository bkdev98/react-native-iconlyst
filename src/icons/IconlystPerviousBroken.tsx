import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPerviousBroken = ({
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
      d="M5.25 5.772v12.456M9.742 9.757c-1.451 1.347-1.418 3.19 0 4.486 1.66 1.535 3.57 2.728 5.697 3.608 1.662.707 3.36-.101 3.606-2.002.27-2.41.275-4.992 0-7.689-.226-1.83-1.766-2.742-3.606-2.011-.82.334-1.61.726-2.363 1.164"
    />
  </Svg>
);
export default IconlystPerviousBroken;
