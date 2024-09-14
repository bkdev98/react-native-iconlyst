import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWatchTwoTone = ({
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
      d="M9.858 6.278h5.288c1.84 0 2.98 1.022 2.975 2.9v5.7c0 1.877-1.14 2.905-2.98 2.905H9.857c-1.834 0-2.98-1.045-2.98-2.953V9.178c0-1.878 1.146-2.9 2.98-2.9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.347 17.648-.43 2.025A1.67 1.67 0 0 1 14.28 21h-3.56a1.674 1.674 0 0 1-1.637-1.325l-.429-2.026M16.347 6.352l-.43-2.026A1.67 1.67 0 0 0 14.28 3h-3.56c-.79 0-1.472.553-1.637 1.325l-.429 2.027"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.09 9.737c-.914.294-1.239 1.288-.96 2.16.448 1.393 2.37 2.44 2.37 2.44s1.936-1.062 2.37-2.44c.278-.872-.05-1.866-.963-2.16a1.57 1.57 0 0 0-1.407.238 1.56 1.56 0 0 0-1.41-.238"
    />
  </Svg>
);
export default IconlystWatchTwoTone;
