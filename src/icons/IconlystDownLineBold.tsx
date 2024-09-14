import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownLineBold = ({
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
      d="M11.999 17.087c-.3 0-.587-.119-.797-.33l-4.877-4.899A1.125 1.125 0 1 1 7.92 10.27l2.956 2.969V4.125a1.125 1.125 0 0 1 2.25 0v9.114l2.959-2.97a1.125 1.125 0 1 1 1.594 1.59l-4.853 4.867c-.205.222-.5.361-.826.361M17.92 21H6.08a1.125 1.125 0 1 1 0-2.25h11.84a1.125 1.125 0 0 1 0 2.25"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownLineBold;
