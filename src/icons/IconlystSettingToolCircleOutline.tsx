import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSettingToolCircleOutline = ({
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
      fillRule="evenodd"
      d="M12.25 4.246a8.254 8.254 0 1 0 0 16.508 8.254 8.254 0 0 0 0-16.508M2.496 12.5c0-5.387 4.367-9.754 9.754-9.754s9.754 4.367 9.754 9.754-4.367 9.754-9.754 9.754-9.754-4.367-9.754-9.754"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.977 8.26a3.825 3.825 0 0 0-4.017 5.43.75.75 0 0 1-.146.854L5.31 18.048a.75.75 0 0 1-1.06-1.061l3.148-3.15a5.325 5.325 0 0 1 7.308-6.6.75.75 0 0 1 .207 1.208l-2.322 2.322.222 1.005 1.005.221 2.321-2.322a.75.75 0 0 1 1.207.207 5.324 5.324 0 0 1-6.6 7.308l-3.149 3.149a.75.75 0 1 1-1.06-1.06l3.503-3.505a.75.75 0 0 1 .854-.146 3.824 3.824 0 0 0 5.43-4.017l-1.601 1.602a1.1 1.1 0 0 1-1.014.296l-1.47-.324a1.1 1.1 0 0 1-.836-.837l-.324-1.47c-.08-.366.03-.748.296-1.013z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSettingToolCircleOutline;
