import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMouse1Broken = ({
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
      d="M12.502 7.672v2.023M19.196 14.705C19.195 18.182 16.197 21 12.5 21c-3.699 0-6.696-2.82-6.695-6.297V9.294C5.808 5.818 8.806 3 12.503 3s6.696 2.82 6.695 6.297v2.09"
    />
  </Svg>
);
export default IconlystMouse1Broken;
