import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystZarinpalBroken = ({
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
      d="M8.824 14.145a1.261 1.261 0 0 0 1.784 1.783l6.12-6.121a1.261 1.261 0 0 0-1.783-1.783zM14.527 15.67l1.892-1.89a.41.41 0 0 1 .701.29v1.89a.41.41 0 0 1-.41.412h-1.892a.411.411 0 0 1-.29-.701M9.078 10.222 10.97 8.33a.41.41 0 0 0-.291-.701h-1.89a.41.41 0 0 0-.412.41v1.892c0 .366.443.55.701.29"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.75 21a9 9 0 0 1-9-9 9 9 0 0 1 9-9 9 9 0 0 1 9 9 9 9 0 0 1-5.344 8.226"
    />
  </Svg>
);
export default IconlystZarinpalBroken;
