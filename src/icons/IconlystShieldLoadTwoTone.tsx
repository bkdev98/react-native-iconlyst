import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldLoadTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.256 18.563a1.967 1.967 0 1 0 3.933-.001 1.967 1.967 0 0 0-3.933 0M16.897 5.922a1.966 1.966 0 1 0 3.931 0 1.966 1.966 0 0 0-3.931 0M12.5 15.6s2.7-.817 2.7-3.07.097-2.427-.12-2.646-2.226-.917-2.58-.917-2.363.7-2.58.917-.119.393-.119 2.647 2.7 3.069 2.7 3.069"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 12.271a8.996 8.996 0 0 1 9.004-8.988c1.779 0 3.437.52 4.826 1.408M21.5 12.28c0 4.972-4.023 9.003-8.996 9.003a8.93 8.93 0 0 1-4.826-1.407"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystShieldLoadTwoTone;
