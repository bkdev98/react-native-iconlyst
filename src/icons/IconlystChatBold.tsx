import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M16.306 11.856a1.035 1.035 0 0 1 0-2.07 1.036 1.036 0 0 1 0 2.069m-4.006 0a1.035 1.035 0 0 1 0-2.07 1.036 1.036 0 0 1 0 2.069m-4.006 0a1.035 1.035 0 0 1 0-2.07 1.036 1.036 0 0 1 0 2.069m9.069-8.704H7.24A4.194 4.194 0 0 0 3.05 7.34v6.916a4.195 4.195 0 0 0 4.19 4.189h1.068c.503 0 .995.203 1.348.558l1.422 1.422a1.72 1.72 0 0 0 2.444 0l1.422-1.421c.36-.36.84-.56 1.349-.56h1.069a4.194 4.194 0 0 0 4.188-4.188V7.34a4.193 4.193 0 0 0-4.188-4.19"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChatBold;
