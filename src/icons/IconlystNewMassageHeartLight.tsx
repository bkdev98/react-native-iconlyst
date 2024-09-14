import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNewMassageHeartLight = ({
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
      d="M11.563 3.473H7.634C4.774 3.473 3 5.498 3 8.358v7.678c0 2.86 1.74 4.877 4.634 4.877h8.17c2.86 0 4.634-2.017 4.634-4.877v-4.15M7.967 15.035h3.75"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.612 5.574c-.31-.97.052-2.077 1.069-2.405a1.74 1.74 0 0 1 1.571.265 1.75 1.75 0 0 1 1.568-.265c1.017.328 1.382 1.435 1.072 2.405-.483 1.536-2.64 2.719-2.64 2.719s-2.14-1.166-2.64-2.719"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNewMassageHeartLight;
