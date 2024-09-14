import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrosoftWindowsLight = ({
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
      d="M13.701 11.462c1.449.899 3.21 1.497 6.298.205L21.5 6.482a7.28 7.28 0 0 1-6.25-.474zM11.087 9.8l1.57-5.41c-1.482-.923-3.124-1.452-6.31-.215L4.863 9.339c2.078-.71 4.285-.627 6.224.46M11.346 19.61c1.481.923 3.122 1.452 6.298.215l1.493-5.149a7.31 7.31 0 0 1-6.215-.489zM3.988 12.407 2.5 17.608c2.058-.652 4.31-.605 6.197.526l1.6-5.5c-1.482-.925-3.125-1.458-6.309-.227"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMicrosoftWindowsLight;
