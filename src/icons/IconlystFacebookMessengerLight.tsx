import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFacebookMessengerLight = ({
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
      d="M7.95 20.037a1.02 1.02 0 0 0-.698-.092c-.81.191-2.118.517-3.07.756a.744.744 0 0 1-.908-.888c.237-1.025.565-2.452.72-3.165.049-.222.019-.45-.077-.656C3.345 14.772 3 13.42 3 12c0-5.512 5.021-9.907 10.715-8.839 3.577.671 6.453 3.547 7.124 7.124C21.907 15.979 17.512 21 11.999 21c-1.409 0-2.818-.34-4.05-.963"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.041 10.452-2.323 3.984a.456.456 0 0 1-.648.15l-2.459-1.64-2.031 1.161a.456.456 0 0 1-.634-.6l1.957-3.915a.456.456 0 0 1 .661-.176l2.432 1.622 2.447-1.223a.456.456 0 0 1 .598.637"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFacebookMessengerLight;
