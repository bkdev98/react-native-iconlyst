import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWavesOutline = ({
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
      d="M12.25 3.75A8.25 8.25 0 0 0 4 12a8.25 8.25 0 0 0 8.25 8.25A8.25 8.25 0 0 0 20.5 12a8.25 8.25 0 0 0-8.25-8.25M2.5 12a9.75 9.75 0 0 1 9.75-9.75A9.75 9.75 0 0 1 22 12a9.75 9.75 0 0 1-9.75 9.75A9.75 9.75 0 0 1 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.721 7.632a.75.75 0 0 1 1.06 0l3.84 3.838a.75.75 0 0 1 0 1.06l-3.84 3.84a.75.75 0 0 1-1.06 0l-3.84-3.84a.75.75 0 0 1 0-1.06zM9.473 12l2.778 2.777 2.778-2.777-2.778-2.778z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWavesOutline;
