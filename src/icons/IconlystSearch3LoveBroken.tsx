import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearch3LoveBroken = ({
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
      d="M11.128 3a8.1 8.1 0 0 0-4.349 14.935M19.228 11.1a8.1 8.1 0 0 1-8.1 8.1M19.456 21a1.515 1.515 0 1 0 0-3.03 1.515 1.515 0 0 0 0 3.03M15.145 3.272c-1.033.333-1.402 1.457-1.087 2.443.508 1.578 2.683 2.762 2.683 2.762s2.192-1.202 2.683-2.762c.315-.986-.056-2.11-1.09-2.443a1.78 1.78 0 0 0-1.593.269 1.76 1.76 0 0 0-1.596-.269"
    />
  </Svg>
);
export default IconlystSearch3LoveBroken;
