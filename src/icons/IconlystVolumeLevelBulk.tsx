import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeLevelBulk = ({
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
      d="M12.571 7.683a5.645 5.645 0 0 0-5.64 5.637 5.646 5.646 0 0 0 5.64 5.638c3.11 0 5.64-2.53 5.64-5.638a5.645 5.645 0 0 0-5.64-5.637"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.57 12.374c-.552 0-1 .451-1 1.003a1 1 0 1 0 2 0v-.008a.996.996 0 0 0-1-.995M6.228 7.996a1 1 0 0 0 1-1v-.009a.996.996 0 0 0-1-.996c-.552 0-1 .453-1 1.005a1 1 0 0 0 1 1M6.228 18.674c-.552 0-1 .453-1 1.005a1 1 0 0 0 2 0v-.009a.996.996 0 0 0-1-.996M12.571 5.324a1 1 0 0 0 1-1v-.009a.995.995 0 0 0-1-.995c-.552 0-1 .452-1 1.004a1 1 0 0 0 1 1M18.934 18.674c-.552 0-1 .453-1 1.005a1 1 0 0 0 2 0v-.009a.996.996 0 0 0-1-.996M18.934 5.991c-.552 0-1 .453-1 1.005a1 1 0 0 0 2 0v-.009a.996.996 0 0 0-1-.996M21.57 12.374c-.552 0-1 .451-1 1.003a1 1 0 1 0 2 0v-.008a.996.996 0 0 0-1-.995"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="m13.881 13.582 1.4-1.654a.75.75 0 1 0-1.145-.97l-1.4 1.654a.75.75 0 0 0 1.145.97"
    />
  </Svg>
);
export default IconlystVolumeLevelBulk;
