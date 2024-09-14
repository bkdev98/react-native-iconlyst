import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQuotationOpenTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 12.766a9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.919 9.395a5.82 5.82 0 0 0-2.205 3.174c-.242.889-.246 1.906.284 2.658.51.721 1.49 1.072 2.34.837 1.551-.43 2.055-2.402 1.006-3.582a2.28 2.28 0 0 0-1.584-.755M9.465 9.395a5.82 5.82 0 0 0-2.206 3.174c-.241.889-.245 1.906.286 2.658a2.22 2.22 0 0 0 2.339.837c1.551-.43 2.055-2.402 1.007-3.582a2.28 2.28 0 0 0-1.584-.755"
    />
  </Svg>
);
export default IconlystQuotationOpenTwoTone;
