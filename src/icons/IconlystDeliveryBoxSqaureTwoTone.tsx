import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxSqaureTwoTone = ({
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
      d="M8.115 3.02 16.541 3c2.945-.007 4.782 2.068 4.79 5.01l.018 7.937c.007 2.944-1.82 5.026-4.766 5.033L8.158 21c-2.945.007-4.782-2.068-4.789-5.01l-.018-7.938C3.344 5.109 5.18 3.027 8.115 3.02"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.78 10.19v3.611c0 .466-.25.897-.653 1.131L13 16.737a1.3 1.3 0 0 1-1.306 0l-3.126-1.805a1.31 1.31 0 0 1-.653-1.13V10.19c0-.466.25-.897.653-1.13l3.126-1.806a1.3 1.3 0 0 1 1.306 0l3.126 1.806c.404.233.653.664.653 1.13"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.1 9.524 4.246 2.457 4.246-2.457M12.348 16.919v-4.942"
    />
  </Svg>
);
export default IconlystDeliveryBoxSqaureTwoTone;
