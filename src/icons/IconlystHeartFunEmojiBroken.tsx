import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartFunEmojiBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.145 11.914c1.021-3.185-.166-6.84-3.503-7.916a5.7 5.7 0 0 0-2.674-.189c-.893.151-1.738.768-2.464 1.313-.73-.54-1.574-1.154-2.466-1.305a5.74 5.74 0 0 0-2.672.181c-3.337 1.085-4.534 4.73-3.512 7.916 1.576 5.053 8.65 8.356 8.65 8.356s4.351-2.026 7.002-5.399M9.795 9.38v.01M15.207 9.38v.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.684 13.185c.442.502 1.02.863 1.771.87.786.008 1.35-.364 1.82-.87"
    />
  </Svg>
);
export default IconlystHeartFunEmojiBroken;
