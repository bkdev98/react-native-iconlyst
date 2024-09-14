import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddDocumentsOutline = ({
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
      d="M6.763 9.965a2.563 2.563 0 0 0-2.564 2.563v5.156a2.564 2.564 0 0 0 2.564 2.564h10.474a2.564 2.564 0 0 0 2.563-2.564v-5.156a2.563 2.563 0 0 0-2.563-2.563zm-4.064 2.563a4.063 4.063 0 0 1 4.064-4.063h10.474a4.063 4.063 0 0 1 4.063 4.063v5.156a4.064 4.064 0 0 1-4.063 4.064H6.763a4.064 4.064 0 0 1-4.064-4.064z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 12.727a.75.75 0 0 1 .75.75v1.098h1.1a.75.75 0 0 1 0 1.5h-1.1v1.099a.75.75 0 0 1-1.5 0v-1.1h-1.098a.75.75 0 0 1 0-1.5h1.098v-1.097a.75.75 0 0 1 .75-.75M7.969 3a.75.75 0 0 1 .75-.75h6.561a.75.75 0 0 1 0 1.5H8.719a.75.75 0 0 1-.75-.75M5.432 6.112a.75.75 0 0 1 .75-.75h11.636a.75.75 0 0 1 0 1.5H6.182a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAddDocumentsOutline;
