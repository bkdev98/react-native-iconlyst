import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonClearTwoTone = ({
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
      d="M20.165 14.676a.056.056 0 0 1 .08.063c-1.033 3.615-4.363 6.26-8.297 6.26-4.77 0-8.632-3.87-8.632-8.631A8.624 8.624 0 0 1 9.57 4.072c.046-.014.086.037.063.08a7.79 7.79 0 0 0 1.38 9.152 7.78 7.78 0 0 0 9.153 1.372"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.098 3-.644 1.371-1.371.644 1.371.644.644 1.371.644-1.37 1.371-.645-1.37-.644zM18.402 7.36 17.6 9.066l-1.708.802 1.708.803.802 1.707.802-1.707 1.708-.803-1.708-.802z"
    />
  </Svg>
);
export default IconlystMoonClearTwoTone;
