import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightUpBoxBold = ({
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
      d="M17.99 10.966a.326.326 0 0 0-.44.008l-2.222 2.222a3 3 0 0 1-2.12.879 2.998 2.998 0 0 1-2.121-5.12l2.222-2.224a.326.326 0 0 0 .008-.438 3.04 3.04 0 0 1-.69-2.18c.014-.19-.127-.365-.317-.365H8.338c-2.995 0-5.007 1.925-5.007 4.79V16.1c0 2.864 2.012 4.788 5.007 4.788h7.128c2.995 0 5.007-1.924 5.007-4.788v-4.126c0-.188-.171-.329-.359-.317a3.02 3.02 0 0 1-2.125-.692"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.919 3.613h-4.305a.75.75 0 0 0 0 1.5h2.494l-5.431 5.431a.749.749 0 1 0 1.06 1.06l5.432-5.43v2.494a.75.75 0 0 0 1.5 0V4.363a.757.757 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRightUpBoxBold;
