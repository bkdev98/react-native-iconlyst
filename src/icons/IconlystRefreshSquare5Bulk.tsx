import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshSquare5Bulk = ({
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
      d="m19.915 9.26 1.083-.002H21a1 1 0 0 1 .708 1.707l-2.042 2.04a.99.99 0 0 1-.751.359l-.014-.002h-.006a1 1 0 0 1-.707-.292l-2.093-2.093a1.001 1.001 0 0 1 .704-1.707l1.116-.003z"
    />
    <Path
      fill={props.color}
      d="M14.686 3.293H7.229c-3.078 0-5.23 2.239-5.23 5.444v7.027c0 3.205 2.152 5.443 5.232 5.443h7.455c3.078 0 5.229-2.238 5.229-5.443a1 1 0 0 0-2 0c0 2.124-1.238 3.443-3.23 3.443H7.232C5.239 19.207 4 17.888 4 15.764V8.737c0-2.124 1.238-3.444 3.229-3.444h7.457c1.99 0 3.229 1.32 3.229 3.444v.53l2-.006v-.524c0-3.205-2.151-5.444-5.23-5.444"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRefreshSquare5Bulk;
