import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightUpBoxBulk = ({
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
      d="M20.473 8.534c0-2.864-2.012-4.788-5.007-4.788H8.338c-2.995 0-5.007 1.924-5.007 4.788V16.1c0 2.864 2.012 4.788 5.007 4.788h7.128c2.995 0 5.007-1.924 5.007-4.788z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.919 3.613h-4.305a.75.75 0 0 0 0 1.5h2.494l-5.431 5.431a.749.749 0 1 0 1.06 1.06l5.432-5.43v2.494a.75.75 0 0 0 1.5 0V4.363a.757.757 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRightUpBoxBulk;
