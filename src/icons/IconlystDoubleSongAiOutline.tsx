import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleSongAiOutline = ({
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
      d="M16.276 14.382a1.966 1.966 0 1 0 0 3.932 1.966 1.966 0 0 0 0-3.932m-3.466 1.966a3.466 3.466 0 1 1 6.931 0 3.466 3.466 0 0 1-6.93 0M5.737 16.318a1.965 1.965 0 1 0 0 3.931 1.965 1.965 0 0 0 0-3.93m-3.466 1.966a3.465 3.465 0 1 1 6.931 0 3.465 3.465 0 0 1-6.93 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.961 5.265a.75.75 0 0 1-.667.825q-1.547.162-3.087.099v12.093a.75.75 0 1 1-1.5 0V5.394a.75.75 0 0 1 .808-.748c1.204.093 2.413.08 3.621-.048a.75.75 0 0 1 .825.667"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.71 9.429a.75.75 0 0 1 .806-.688q2.781.22 5.58.073a.75.75 0 1 1 .08 1.498 44 44 0 0 1-5.778-.076.75.75 0 0 1-.689-.807M18.992 10.489a.75.75 0 0 1 .75.75v5.11a.75.75 0 0 1-1.5 0v-5.11a.75.75 0 0 1 .75-.75M17.875 9.403a.75.75 0 0 0 .703-.49l.11-.297a3.34 3.34 0 0 1 1.973-1.976l.297-.11a.75.75 0 0 0 0-1.407l-.297-.11a3.34 3.34 0 0 1-1.973-1.976l-.11-.297a.75.75 0 0 0-1.406 0l-.11.297a3.34 3.34 0 0 1-1.973 1.976l-.297.11a.75.75 0 0 0 0 1.407l.297.11a3.34 3.34 0 0 1 1.973 1.976l.11.297a.75.75 0 0 0 .703.49m-1.143-3.576a4.8 4.8 0 0 0 1.143-1.145c.314.443.7.83 1.143 1.145a4.9 4.9 0 0 0-1.143 1.144c-.314-.443-.7-.83-1.143-1.144"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDoubleSongAiOutline;
