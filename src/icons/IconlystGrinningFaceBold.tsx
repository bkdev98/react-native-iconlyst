import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGrinningFaceBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M15.59 9.27h-1.582a.75.75 0 0 1 0-1.5h1.582a.75.75 0 0 1 0 1.5m-3.591 7.568c-1.857 0-3.369-1.608-3.369-3.584a.5.5 0 0 1 .5-.5h5.737a.5.5 0 0 1 .5.5c0 1.976-1.51 3.584-3.368 3.584M7.658 8.52a.75.75 0 0 1 .75-.75h1.581a.75.75 0 0 1 0 1.5H8.408a.75.75 0 0 1-.75-.75M12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGrinningFaceBold;
