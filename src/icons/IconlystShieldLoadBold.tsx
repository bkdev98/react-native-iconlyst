import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldLoadBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.064 9.573c-.3.304-.296.555-.278 1.488.006.358.014.843.014 1.513 0 2.59 2.93 3.51 3.054 3.549a.5.5 0 0 0 .292 0c.124-.038 3.053-.958 3.053-3.55 0-.67.01-1.154.014-1.512.019-.933.023-1.184-.285-1.496-.355-.344-2.506-1.051-2.927-1.051-.423 0-2.575.707-2.937 1.059"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.75 12.315c.008-4.544 3.711-8.24 8.254-8.24a8.17 8.17 0 0 1 4.04 1.083 2.4 2.4 0 0 0-.148.806 2.47 2.47 0 0 0 2.466 2.47 2.47 2.47 0 0 0 2.467-2.47 2.466 2.466 0 0 0-2.467-2.46c-.523 0-1.007.167-1.407.446a9.67 9.67 0 0 0-4.951-1.376c-5.369 0-9.744 4.37-9.754 9.74a.75.75 0 1 0 1.5.001M21 11.574a.75.75 0 0 0-.75.75c0 4.55-3.699 8.25-8.246 8.25a8.2 8.2 0 0 1-3.996-1.05 2.5 2.5 0 0 0 .181-.92 2.466 2.466 0 0 0-4.933 0 2.47 2.47 0 0 0 2.467 2.47 2.44 2.44 0 0 0 1.302-.38 9.7 9.7 0 0 0 4.979 1.38c5.374 0 9.746-4.374 9.746-9.75a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShieldLoadBold;
