import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDcoumentAddBold = ({
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
      d="M14.25 14.277H12.75v1.499a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.498a.75.75 0 0 1 1.5 0v1.499h1.498a.75.75 0 0 1 0 1.5m5.6-5.181h-2.963c-1.765-.01-3.223-1.472-3.223-3.255V2.7a.444.444 0 0 0-.443-.447H8.068c-2.403 0-4.352 1.979-4.352 4.395v10.506c0 2.534 2.046 4.59 4.555 4.59h7.671c2.402 0 4.342-1.958 4.342-4.375V9.534a.434.434 0 0 0-.434-.438"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.016 7.672c.673.007 1.608.01 2.4.007a.465.465 0 0 0 .332-.787c-.51-.534-1.218-1.28-1.93-2.027l-1.955-2.053a.46.46 0 0 0-.793.325v2.569c0 1.078.879 1.966 1.946 1.966"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDcoumentAddBold;
