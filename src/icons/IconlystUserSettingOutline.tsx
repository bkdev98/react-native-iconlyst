import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserSettingOutline = ({
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
      d="M11.605 4.75a3.2 3.2 0 1 0 0 6.401 3.2 3.2 0 0 0 0-6.401m-4.7 3.2a4.7 4.7 0 1 1 9.4 0 4.7 4.7 0 0 1-9.4 0M17 13.766a.75.75 0 0 1 .75.75v.274c.369.112.716.307 1.014.586l.238-.138a.75.75 0 1 1 .753 1.297l-.242.14c.089.383.089.783 0 1.166l.241.14a.75.75 0 1 1-.752 1.297l-.238-.138a2.6 2.6 0 0 1-1.013.586V20a.75.75 0 0 1-1.5 0v-.276a2.6 2.6 0 0 1-1.013-.585l-.239.138a.75.75 0 1 1-.752-1.297l.242-.14a2.6 2.6 0 0 1 0-1.165l-.242-.14a.75.75 0 0 1 .752-1.298l.239.138a2.6 2.6 0 0 1 1.013-.585v-.275a.75.75 0 0 1 .75-.75m-.761 2.729a1.08 1.08 0 1 0 1.525 0l.079-.08m-1.604.08a1.08 1.08 0 0 1 1.524 0zM7.024 14.548c1.25-.42 2.898-.544 4.583-.544a.75.75 0 0 1 0 1.5c-1.654 0-3.098.128-4.106.466-.5.167-.837.369-1.042.582a.98.98 0 0 0-.287.727c0 .308.1.535.287.731.205.214.54.417 1.039.587 1.005.341 2.449.473 4.109.473a.75.75 0 0 1 0 1.5c-1.694 0-3.343-.129-4.592-.553-.628-.213-1.21-.52-1.641-.971a2.5 2.5 0 0 1-.702-1.767c0-.703.256-1.3.706-1.767.434-.45 1.017-.754 1.646-.965"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserSettingOutline;
