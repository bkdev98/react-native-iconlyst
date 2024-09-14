import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize3ArrowCollapseLight = ({
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
      d="M12.002 11.767 12 4.461M8.65 8.403 12 11.766l3.348-3.363M13.673 14.955 20 18.608m-5.088.93-1.239-4.581 4.587-1.219M10.327 14.955 4 18.608m5.089.93 1.238-4.581-4.587-1.219"
    />
  </Svg>
);
export default IconlystResize3ArrowCollapseLight;
