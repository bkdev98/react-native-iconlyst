import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollar2Outline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M13.232 18.176h-2.32a2.97 2.97 0 0 1-2.967-2.967.75.75 0 1 1 1.5 0 1.47 1.47 0 0 0 1.466 1.467h2.321a1.824 1.824 0 0 0 0-3.648h-1.86a3.427 3.427 0 1 1 0-6.854h2.216a2.97 2.97 0 0 1 2.967 2.966v.128a.75.75 0 0 1-1.5 0V9.14a1.47 1.47 0 0 0-1.467-1.466h-2.217a1.927 1.927 0 0 0 0 3.854h1.861a3.324 3.324 0 1 1 0 6.648"
    />
    <Path
      fill={props.color}
      d="M12.249 19.813a.75.75 0 0 1-.75-.75v-14a.75.75 0 1 1 1.5 0v14a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystDollar2Outline;
