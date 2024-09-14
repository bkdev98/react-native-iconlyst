import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRadioBroken = ({
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
      d="M12.249 20.84h4.531c2.755 0 4.47-1.945 4.47-4.696v-3.79c0-2.752-1.715-4.696-4.469-4.696H7.718c-2.747 0-4.468 1.944-4.468 4.697v3.789c0 2.751 1.714 4.696 4.468 4.696h.706M8.648 12.101l-1.503-.02"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.379 11.096a3.155 3.155 0 1 0 2.38 1.084M7.376 16.427v.023m.06-.259a.29.29 0 1 1-.003.579.29.29 0 0 1 .002-.579M7.719 7.67l4.51-4.51"
    />
  </Svg>
);
export default IconlystRadioBroken;
