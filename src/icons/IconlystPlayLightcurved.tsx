import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayLightcurved = ({
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
      d="M2.75 12c0 6.937 2.313 9.25 9.25 9.25s9.25-2.313 9.25-9.25S18.937 2.75 12 2.75 2.75 5.063 2.75 12"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.416 11.856c0-.905-4.584-3.796-5.104-3.276-.519.52-.57 5.983 0 6.552.571.57 5.104-2.373 5.104-3.277"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlayLightcurved;
