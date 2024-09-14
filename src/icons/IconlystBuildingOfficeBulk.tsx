import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuildingOfficeBulk = ({
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
      d="M20.165 20.424V5.348a2.67 2.67 0 0 0-2.668-2.67H7.447a2.67 2.67 0 0 0-2.667 2.67v15.076z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M9.71 8.794h1.04a.749.749 0 1 0 0-1.5H9.71a.749.749 0 1 0 0 1.5M10.75 12.374a.749.749 0 1 0 0-1.5H9.71a.749.749 0 1 0 0 1.5zM13.44 8.044c0-.41.34-.75.75-.75h1.04a.749.749 0 1 1 0 1.5h-1.04c-.41 0-.75-.33-.75-.75M15.23 10.874h-1.04a.749.749 0 1 0 0 1.5h1.04a.749.749 0 1 0 0-1.5"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.56 20.424v-3.37c0-1.01-.82-1.84-1.83-1.84h-2.52c-1.01 0-1.83.83-1.83 1.84v3.37h-5.5a.749.749 0 1 0 0 1.5h17.18c.42 0 .75-.33.75-.75 0-.41-.33-.75-.75-.75zm-1.83-3.71h-2.52c-.18 0-.33.16-.33.34v3.37h3.18v-3.37c0-.18-.15-.34-.33-.34"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBuildingOfficeBulk;
