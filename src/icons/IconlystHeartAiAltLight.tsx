import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartAiAltLight = ({
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
      d="M17.142 3.998c3.337 1.075 4.525 4.73 3.503 7.916-1.674 5.111-8.641 8.356-8.641 8.356s-7.074-3.303-8.65-8.356c-1.022-3.185.175-6.831 3.512-7.916a5.74 5.74 0 0 1 2.672-.18c.892.15 1.737.765 2.466 1.304.726-.545 1.571-1.161 2.464-1.313a5.7 5.7 0 0 1 2.674.189"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.739 13.08-.088-.237a3.26 3.26 0 0 0-1.924-1.927l-.236-.088.236-.087a3.26 3.26 0 0 0 1.924-1.927l.088-.237.087.237a3.26 3.26 0 0 0 1.924 1.927l.236.087-.236.088a3.26 3.26 0 0 0-1.924 1.927zM14.338 14.155a1.53 1.53 0 0 0-1.02-1.02c.489-.15.871-.532 1.02-1.021.148.489.53.872 1.019 1.02-.489.15-.87.532-1.02 1.021"
    />
  </Svg>
);
export default IconlystHeartAiAltLight;