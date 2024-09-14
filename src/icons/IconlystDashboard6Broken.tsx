import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashboard6Broken = ({
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
      d="M9.096 10.379c-1.094 0-1.78.774-1.78 1.87v2.958c0 1.095.683 1.87 1.78 1.87h6.269c1.097 0 1.78-.775 1.78-1.87v-2.958c0-1.096-.683-1.87-1.78-1.87H12.23M16.628 6.924H7.834"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.23 21H8.012c-2.948 0-4.783-2.081-4.783-5.026V8.026C3.23 5.081 5.073 3 8.013 3h8.434c2.948 0 4.784 2.081 4.784 5.026v7.948c0 2.945-1.836 5.026-4.785 5.026h-.18"
    />
  </Svg>
);
export default IconlystDashboard6Broken;
