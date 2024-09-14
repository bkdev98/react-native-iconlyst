import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownTwiceBulk = ({
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
      d="M16.535 20.918c-.093 0-.177-.029-.263-.053-.038-.011-.08-.008-.117-.024a1 1 0 0 1-.335-.227l-3.953-3.954a.999.999 0 1 1 1.414-1.414l2.254 2.254V4.082a1 1 0 1 1 2 0v13.425l2.259-2.261a1 1 0 0 1 1.415 1.414l-3.963 3.965a1 1 0 0 1-.708.293z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.086 4.082v5.804l1.875-1.875a1 1 0 1 1 1.415 1.414l-3.547 3.546a1 1 0 0 1-1.452.038L3.793 9.425a.999.999 0 1 1 1.414-1.414L7.086 9.89V4.082a1 1 0 1 1 2 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownTwiceBulk;
