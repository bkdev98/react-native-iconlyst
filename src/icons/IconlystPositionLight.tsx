import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPositionLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.175 17.823 12 20m0 0-2.175-2.176M12 20v-5.538M9.824 6.176 12 4m0 0 2.175 2.176M12 4v5.538M6.176 14.175 4 12m0 0 2.176-2.176M4 12h5.538M17.823 9.824 20 12m0 0-2.176 2.175M20 12h-5.538"
    />
  </Svg>
);
export default IconlystPositionLight;
