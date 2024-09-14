import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMouseModernBroken = ({
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
      d="M12.502 3v6.738M19.196 9.295C19.195 5.818 16.197 3 12.5 3 8.8 3 5.804 5.82 5.805 9.297v5.409c.002 3.476 3 6.294 6.697 6.294s6.696-2.82 6.695-6.297v-2.09"
    />
  </Svg>
);
export default IconlystMouseModernBroken;
