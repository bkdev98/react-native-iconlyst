import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMagicLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.973 7.89 5.534 6.45m6.118 12.735v2.036zm0-15.269v2.035zm-6.617 8.652H3zm15.269 0h-2.035zM6.973 17.247l-1.439 1.44zM17.771 6.45l-1.44 1.44zM21 21.916l-4.67-4.669"
    />
  </Svg>
);
export default IconlystMagicLight;
