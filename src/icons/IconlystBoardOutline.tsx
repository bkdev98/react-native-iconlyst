import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoardOutline = ({
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
      d="M8.336 9.047a.75.75 0 0 1 .75-.75h5.828a.75.75 0 0 1 0 1.5H9.086a.75.75 0 0 1-.75-.75m0 3.474a.75.75 0 0 1 .75-.75h3.017a.75.75 0 1 1 0 1.5H9.086a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.85 8.378a4.51 4.51 0 0 1 4.51-4.51h9.28a4.51 4.51 0 0 1 4.51 4.51v5.093a4.51 4.51 0 0 1-4.51 4.51H7.36a4.51 4.51 0 0 1-4.51-4.51zm4.51-3.01a3.01 3.01 0 0 0-3.01 3.01v5.093a3.01 3.01 0 0 0 3.01 3.01h9.28a3.01 3.01 0 0 0 3.01-3.01V8.378a3.01 3.01 0 0 0-3.01-3.01z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 2.25a.75.75 0 0 1 .75.75v1.629a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M12.001 16.508a.75.75 0 0 1 .535.224l3.672 3.74a.75.75 0 0 1-1.07 1.051L12 18.328l-3.138 3.195a.75.75 0 0 1-1.07-1.05l3.673-3.74a.75.75 0 0 1 .535-.225"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBoardOutline;
