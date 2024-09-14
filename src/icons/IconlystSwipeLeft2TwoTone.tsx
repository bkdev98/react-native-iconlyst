import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwipeLeft2TwoTone = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M18.194 9.555c1.75 2.062 2.03 5.532 1.046 7.642-1.256 2.693-6.719 4.851-9.343 3.263-1.665-1.009-3.185-2.414-4.31-3.76-.605-.722-.489-1.779.221-2.396a1.804 1.804 0 0 1 2.229-.108L9.732 15.4 6.495 6.508a1.65 1.65 0 0 1 3.092-1.153l1.521 3.989c2.246-.582 5.347-1.838 7.086.21"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m13.945 3-1.258 1.703L14.39 5.96"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12.688 4.704c2.395-.608 4.665-.68 6.469.593"
    />
  </Svg>
);
export default IconlystSwipeLeft2TwoTone;
