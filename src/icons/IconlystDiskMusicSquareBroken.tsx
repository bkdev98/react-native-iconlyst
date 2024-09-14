import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiskMusicSquareBroken = ({
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
      d="M16.466 21c2.949 0 4.784-2.081 4.784-5.026V8.026C21.25 5.081 19.415 3 16.467 3H8.032C5.092 3 3.25 5.081 3.25 8.026v7.948C3.25 18.919 5.084 21 8.032 21h4.217"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.686 12.001a5.613 5.613 0 0 0 10.259 3.153M15.013 7.085a5.6 5.6 0 0 0-2.713-.698 5.61 5.61 0 0 0-4.75 2.618"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.705 12.435a2.11 2.11 0 0 0 2.11 2.109M12.25 11.674v-.01M17.916 3.225v7.27l-3.113 1.665"
    />
  </Svg>
);
export default IconlystDiskMusicSquareBroken;
