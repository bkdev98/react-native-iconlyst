import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCrossedOutEyesOutline = ({
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
      d="M12.25 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.5 12a9.75 9.75 0 0 1 9.75-9.75A9.75 9.75 0 0 1 22 12c0 5.384-4.365 9.75-9.75 9.75S2.5 17.384 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 13.55c-.553 0-1.003.45-1.003 1.004v.746a1.004 1.004 0 0 0 2.007 0v-.746c0-.554-.45-1.003-1.004-1.003m-2.503 1.004a2.504 2.504 0 0 1 5.007 0v.746a2.504 2.504 0 0 1-5.007 0zM13.625 7.282a.75.75 0 0 1 1.06 0l.483.482.48-.48a.75.75 0 0 1 1.061 1.06l-.48.48.483.485a.75.75 0 1 1-1.06 1.06l-.484-.483-.481.48a.75.75 0 0 1-1.061-1.06l.481-.481-.482-.482a.75.75 0 0 1 0-1.06M7.789 7.282a.75.75 0 0 1 1.06 0l.483.482.48-.48a.75.75 0 1 1 1.061 1.06l-.48.48.483.485a.75.75 0 1 1-1.06 1.06l-.484-.483-.481.48a.75.75 0 1 1-1.061-1.06l.481-.481-.482-.482a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCrossedOutEyesOutline;
