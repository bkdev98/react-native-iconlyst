import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConnectingCableOutline = ({
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
      d="m7.193 12.579-.003.002-.853.853a3.088 3.088 0 1 0 4.367 4.367l.853-.853.002-.003v-.009l-.002-.003-4.352-4.352-.003-.002h-.009M6.13 11.52a1.51 1.51 0 0 1 2.137 0l4.351 4.351c.59.59.59 1.547 0 2.137l-.853.852a4.588 4.588 0 1 1-6.488-6.487zl.53.53z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.333 17.802a.75.75 0 0 1 0 1.06L3.53 21.665a.75.75 0 1 1-1.06-1.06l2.803-2.803a.75.75 0 0 1 1.06 0M17.663 6.475a3.09 3.09 0 0 0-4.366 0l-.853.853-.003.003v.009000000000000001l.003.003 4.351 4.351.003.003h.009000000000000001l.003-.003.853-.853a3.09 3.09 0 0 0 0-4.366m-5.427-1.061a4.588 4.588 0 1 1 6.488 6.488l-.853.853a1.51 1.51 0 0 1-2.137 0l-4.351-4.352a1.51 1.51 0 0 1 0-2.136l.53.53-.53-.53z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.53 2.606a.75.75 0 0 1 0 1.061L18.729 6.47a.75.75 0 0 1-1.061-1.06l2.803-2.804a.75.75 0 0 1 1.06 0M10.708 10.599a.75.75 0 0 1 0 1.06L9.026 13.34a.75.75 0 1 1-1.06-1.06l1.681-1.681a.75.75 0 0 1 1.06 0m2.83 2.83a.75.75 0 0 1 0 1.061l-1.68 1.681a.75.75 0 0 1-1.061-1.06l1.68-1.682a.75.75 0 0 1 1.062 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystConnectingCableOutline;
