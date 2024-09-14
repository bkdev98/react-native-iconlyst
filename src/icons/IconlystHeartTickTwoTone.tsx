import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartTickTwoTone = ({
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
      d="M18.052 3.999c3.338 1.075 4.525 4.73 3.503 7.916-1.674 5.111-8.641 8.356-8.641 8.356s-7.074-3.303-8.65-8.356c-1.022-3.186.175-6.831 3.512-7.916a5.74 5.74 0 0 1 2.672-.18c.893.15 1.737.765 2.466 1.304.726-.545 1.571-1.161 2.465-1.313a5.7 5.7 0 0 1 2.673.189"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.21 10.894 1.766 1.767 3.635-3.638"
    />
  </Svg>
);
export default IconlystHeartTickTwoTone;