import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMapSearchOutline = ({
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
      d="M9.152 4.14a.76.76 0 0 0-.566.019L4.695 5.887A1.17 1.17 0 0 0 4 6.955v12.662c0 .212.219.354.413.268l3.563-1.582h.001a2.26 2.26 0 0 1 1.688-.057l2.163.787a.75.75 0 1 1-.512 1.41l-2.164-.788H9.15a.76.76 0 0 0-.566.02l-3.562 1.581A1.794 1.794 0 0 1 2.5 19.617V6.955c0-1.054.62-2.011 1.586-2.439l3.89-1.728a2.26 2.26 0 0 1 1.688-.058l5.687 2.065c.185.067.388.06.567-.02l3.556-1.58h.002c1.19-.536 2.524.34 2.524 1.638v4.64a.75.75 0 0 1-1.5 0v-4.64a.29.29 0 0 0-.41-.27l-.004.002-3.559 1.582a2.26 2.26 0 0 1-1.688.058z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.156 13.2a2.708 2.708 0 1 0 0 5.415 2.708 2.708 0 0 0 0-5.416m-4.208 2.707a4.208 4.208 0 1 1 8.416 0 4.208 4.208 0 0 1-8.416 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.979 17.908a.75.75 0 0 1 1.06-.001l1.741 1.736a.75.75 0 0 1-1.06 1.062l-1.74-1.737a.75.75 0 0 1-.001-1.06M15.667 4.836a.75.75 0 0 1 .75.75v3.401a.75.75 0 0 1-1.5 0V5.586a.75.75 0 0 1 .75-.75M8.837 2.605a.75.75 0 0 1 .75.75v15.5a.75.75 0 0 1-1.5 0v-15.5a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMapSearchOutline;
