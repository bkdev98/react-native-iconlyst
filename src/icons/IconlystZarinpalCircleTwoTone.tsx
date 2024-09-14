import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystZarinpalCircleTwoTone = ({
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
      d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.074 14.147a1.261 1.261 0 0 0 1.784 1.783l6.12-6.121a1.261 1.261 0 0 0-1.783-1.784zM13.777 15.669l1.892-1.892a.41.41 0 0 1 .701.291v1.89a.41.41 0 0 1-.41.412h-1.892a.411.411 0 0 1-.29-.701M8.328 10.222 10.22 8.33a.41.41 0 0 0-.291-.701h-1.89a.41.41 0 0 0-.412.41v1.892c0 .366.443.55.701.29"
    />
  </Svg>
);
export default IconlystZarinpalCircleTwoTone;
