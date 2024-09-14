import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessSearchExploreLight = ({
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
      d="M12.038 19.96 3.386 9.675a1.45 1.45 0 0 1 .096-1.964c4.955-4.902 12.187-4.895 17.134.022.526.522.581 1.357.119 1.936l-.997 1.25"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.45 16.75a2.468 2.468 0 1 1-3.491-3.49 2.468 2.468 0 0 1 3.49 3.49m0 0 1.337 1.337"
    />
  </Svg>
);
export default IconlystWirelessSearchExploreLight;
