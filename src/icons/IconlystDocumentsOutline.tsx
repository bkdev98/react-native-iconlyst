import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentsOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M6.763 9.965a2.563 2.563 0 0 0-2.564 2.563v5.156a2.564 2.564 0 0 0 2.564 2.564h10.474a2.564 2.564 0 0 0 2.563-2.564v-5.156a2.563 2.563 0 0 0-2.563-2.563zm-4.064 2.563a4.063 4.063 0 0 1 4.064-4.063h10.474a4.063 4.063 0 0 1 4.063 4.063v5.156a4.064 4.064 0 0 1-4.063 4.064H6.763a4.064 4.064 0 0 1-4.064-4.064zM7.97 3a.75.75 0 0 1 .75-.75h6.561a.75.75 0 0 1 0 1.5H8.719A.75.75 0 0 1 7.97 3M5.431 6.112a.75.75 0 0 1 .75-.75h11.636a.75.75 0 0 1 0 1.5H6.182a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentsOutline;
