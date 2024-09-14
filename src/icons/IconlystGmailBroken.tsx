import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGmailBroken = ({
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
      d="m14.186 9.371-1.432 1.392-5.735-5.567a1.93 1.93 0 0 0-2.736.07 1.933 1.933 0 0 0 .071 2.738l8.4 8.153 8.392-8.153c.777-.739.808-1.96.07-2.737a1.93 1.93 0 0 0-2.735-.071l-1.432 1.392"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.75 6.62V17.4c0 1.07.867 1.938 1.937 1.938.463 0 1.936-.04 1.936-.04v-7.826M21.75 6.62V17.4c0 1.07-.867 1.936-1.937 1.936-.463 0-1.936-.038-1.936-.038v-8.016"
    />
  </Svg>
);
export default IconlystGmailBroken;
