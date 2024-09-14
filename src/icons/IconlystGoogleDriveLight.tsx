import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleDriveLight = ({
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
      d="M12.756 20.575H7.523c-.645 0-1.244-.34-1.575-.895L3.55 15.659a1.84 1.84 0 0 1-.001-1.879l5.883-9.882c.33-.555.928-.895 1.575-.896L14.501 3a1.83 1.83 0 0 1 1.578.896l4.628 7.778"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.674 12.258-1.923-3.735L9.6 14.631h3.621M18.415 15.32v2.57m.001 3.111-.002-.061"
    />
  </Svg>
);
export default IconlystGoogleDriveLight;
