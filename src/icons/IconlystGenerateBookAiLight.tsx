import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGenerateBookAiLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.783 3h8.435C19.166 3 21 5.081 21 8.027v7.947C21 18.919 19.166 21 16.217 21H7.783C4.835 21 3 18.919 3 15.974V8.027C3 5.081 4.844 3 7.783 3M7.635 3v18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.869 14.745-.107-.289a3.97 3.97 0 0 0-2.346-2.35L11.128 12l.288-.107a3.97 3.97 0 0 0 2.346-2.35l.107-.288.106.289a3.97 3.97 0 0 0 2.347 2.35l.288.106-.288.107a3.97 3.97 0 0 0-2.347 2.35zM16.998 15.917v.01"
    />
  </Svg>
);
export default IconlystGenerateBookAiLight;
