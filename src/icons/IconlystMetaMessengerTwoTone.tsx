import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMetaMessengerTwoTone = ({
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
      d="M7.95 20.037a1.02 1.02 0 0 0-.698-.092c-.81.191-2.118.517-3.07.756a.744.744 0 0 1-.908-.888c.237-1.025.565-2.452.72-3.165.049-.222.019-.45-.077-.656C3.345 14.772 3 13.42 3 12c0-5.512 5.021-9.907 10.715-8.839 3.578.671 6.453 3.547 7.124 7.124C21.907 15.979 17.512 21 11.999 21c-1.409 0-2.818-.34-4.05-.963"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.223 10.465-2.815 3.072-2.815-3.072-2.816 3.072"
    />
  </Svg>
);
export default IconlystMetaMessengerTwoTone;
