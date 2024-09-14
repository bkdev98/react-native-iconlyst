import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNavigationPlusTwoTone = ({
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
      d="M20.158 6.53c.493-1.471-.916-2.867-2.382-2.362L5.762 8.303c-1.636.563-1.696 2.853-.094 3.502l4.13 1.672c.465.188.834.555 1.026 1.018l1.772 4.284c.662 1.599 2.953 1.52 3.502-.121"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.996 9.86v5.005M20.5 12.36h-5.006"
    />
  </Svg>
);
export default IconlystNavigationPlusTwoTone;
