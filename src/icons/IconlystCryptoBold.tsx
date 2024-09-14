import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCryptoBold = ({
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
      d="M7.159 20.038a5.1 5.1 0 0 1-3.314-3.764.75.75 0 0 0-1.469.306 6.6 6.6 0 0 0 4.295 4.876.75.75 0 0 0 .488-1.418M16.843 3.926a5.1 5.1 0 0 1 3.313 3.764.749.749 0 1 0 1.468-.306 6.6 6.6 0 0 0-4.293-4.876.749.749 0 1 0-.488 1.418M7.09 14.948c.186.059.37-.085.383-.28q.022-.321.077-.635a7.84 7.84 0 0 1 6.56-6.56c.22-.039.44-.057.659-.07a.287.287 0 0 0 .263-.369C14.227 4.462 11.824 2.593 9 2.593c-3.49 0-6.33 2.84-6.33 6.33 0 2.825 1.86 5.214 4.42 6.025"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.32 8.883c-.335 0-.67.018-1 .08a6.31 6.31 0 0 0-5.28 5.28c-.06.317-.08.662-.08 1a6.336 6.336 0 0 0 6.33 6.29c3.48 0 6.32-2.84 6.32-6.33 0-3.47-2.82-6.3-6.29-6.32"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCryptoBold;
