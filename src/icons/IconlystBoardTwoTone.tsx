import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoardTwoTone = ({
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
      d="M9.086 9.047h5.828M9.086 12.52h3.017"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.64 4.617H7.36a3.76 3.76 0 0 0-3.76 3.76v5.094a3.76 3.76 0 0 0 3.76 3.76h9.28a3.76 3.76 0 0 0 3.76-3.76V8.378a3.76 3.76 0 0 0-3.76-3.76"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 3v1.629M15.673 20.998l-3.672-3.74-3.673 3.74"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBoardTwoTone;
