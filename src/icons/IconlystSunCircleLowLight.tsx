import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunCircleLowLight = ({
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
      d="M18.419 5.636A9 9 0 1 1 5.69 18.364 9 9 0 0 1 18.419 5.636M12.055 17.49v.01m0-11v.01M6.565 12h-.01m11 0h-.011m-9.371 3.882-.008.007m7.779-7.778-.008.008m-7.763 0-.008-.008m7.779 7.778-.008-.008"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.055 9.203a2.797 2.797 0 1 1 0 5.594 2.797 2.797 0 0 1 0-5.594"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSunCircleLowLight;
