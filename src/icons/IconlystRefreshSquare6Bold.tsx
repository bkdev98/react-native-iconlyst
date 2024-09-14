import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshSquare6Bold = ({
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
      d="M16.771 3.293H9.314c-3.078 0-5.229 2.239-5.229 5.444v.524l-1.083-.003H3a1 1 0 0 0-.708 1.707l2.042 2.041a.99.99 0 0 0 .751.358l.014-.002.006.001a1 1 0 0 0 .707-.293l2.093-2.093a1.001 1.001 0 0 0-.704-1.707l-1.116-.003v-.53c0-2.124 1.238-3.444 3.23-3.444h7.456c1.991 0 3.23 1.32 3.23 3.444v7.027c0 2.124-1.24 3.443-3.232 3.443H9.314c-1.99 0-3.229-1.319-3.229-3.443a1 1 0 1 0-2 0c0 3.205 2.151 5.443 5.23 5.443h7.454c3.08 0 5.231-2.238 5.231-5.443V8.737c0-3.205-2.15-5.444-5.229-5.444"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRefreshSquare6Bold;
