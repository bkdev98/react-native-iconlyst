import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliverySecurityBroken = ({
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
      d="m21.726 10.364-.018-2.327c-.007-2.923-1.831-4.983-4.757-4.976l-8.369.02c-2.916.006-4.74 2.075-4.732 4.998l.009 3.942M3.868 15.963c.007 2.922 1.831 4.982 4.757 4.976l3.934-.02"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.613 5.809v3.877L12.8 8.768l-2.83.934-.007-6.617M20.895 19.379c-.953 1.012-2.295 1.418-2.295 1.418s-3.224-.976-3.224-3.667c0-2.692-.117-2.607.141-2.866.26-.259 2.66-1.096 3.083-1.096.422 0 2.823.835 3.082 1.096.24.242.157.892.143 2.299"
    />
  </Svg>
);
export default IconlystDeliverySecurityBroken;
