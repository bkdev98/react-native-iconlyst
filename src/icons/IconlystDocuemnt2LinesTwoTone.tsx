import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocuemnt2LinesTwoTone = ({
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
      d="M14.286 3c.558 0 1.092.227 1.478.63l3.792 3.949c.366.382.571.891.571 1.42v8.165A3.813 3.813 0 0 1 16.47 21l-7.926-.001a3.754 3.754 0 0 1-3.67-3.835V6.656A3.746 3.746 0 0 1 8.634 3z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.718 15.353H9.422m3.29-3.681H9.422M14.77 3.063v2.892a2.56 2.56 0 0 0 2.554 2.56h2.738"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDocuemnt2LinesTwoTone;
