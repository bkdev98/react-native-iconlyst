import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSettingBoldcurved = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 15c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3m7.514-2.086A1.05 1.05 0 0 1 19.24 12c0-.382.196-.723.524-.913a3.007 3.007 0 0 0 1.087-4.086 2.965 2.965 0 0 0-4.064-1.095c-.324.19-.711.19-1.037.001a1.04 1.04 0 0 1-.527-.915C15.224 3.343 13.89 2 12.25 2a2.987 2.987 0 0 0-2.975 2.992c0 .384-.197.726-.527.916a1.02 1.02 0 0 1-1.035-.002 2.94 2.94 0 0 0-2.255-.301 2.96 2.96 0 0 0-1.81 1.397 3.005 3.005 0 0 0 1.088 4.084c.327.19.522.532.522.914s-.195.724-.522.913a3.01 3.01 0 0 0-1.088 4.086 2.96 2.96 0 0 0 4.065 1.096c.323-.19.71-.19 1.035-.003.33.19.527.532.527.916A2.987 2.987 0 0 0 12.25 22c1.64 0 2.974-1.343 2.974-2.992 0-.383.197-.726.527-.915a1.02 1.02 0 0 1 1.037.002 2.965 2.965 0 0 0 4.064-1.096 3.006 3.006 0 0 0-1.088-4.085"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSettingBoldcurved;
