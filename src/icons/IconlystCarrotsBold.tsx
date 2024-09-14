import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarrotsBold = ({
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
      fill={props.color}
      d="M13.572 5.655c.263.032.514-.165.479-.428-.065-.487-.209-.952-.438-1.33-.277-.459-.734-.858-1.367-.832-.446.019-.878.248-1.29.64-1.023-1.14-2.294-1.5-3.3-.968S6.234 4.519 6.6 6.004c-.552.117-.982.344-1.248.704-.375.509-.306 1.115-.086 1.607.214.479.562.892.968 1.23.207.171.512.058.622-.188 1.013-2.26 4.263-4.005 6.716-3.702"
    />
    <Path
      fill={props.color}
      d="M9.089 15.586a.49.49 0 0 0 .63.143l2.05-1.083a.75.75 0 1 1 .7 1.326l-1.627.86a.492.492 0 0 0-.143.76c2.339 2.65 5.275 4.933 6.97 3.939 1.184-.561 1.474-2.397 1.277-4.573a.485.485 0 0 0-.715-.378l-1.06.561a.75.75 0 1 1-.701-1.326l1.797-.95a.49.49 0 0 0 .253-.544 27 27 0 0 0-1.003-3.408.49.49 0 0 0-.692-.26l-2.229 1.179a.75.75 0 0 1-.701-1.326l2.382-1.26a.484.484 0 0 0 .204-.662c-.25-.449-.494-.802-.718-1.026-.852-.855-2.451-2.014-5.655-.32-3.203 1.696-3.144 3.668-2.919 4.855.148.77.874 2.08 1.9 3.493"
    />
  </Svg>
);
export default IconlystCarrotsBold;
