import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEditSquareBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M16.665 2.01A5.32 5.32 0 0 1 20.591 3.4a5.38 5.38 0 0 1 1.399 3.936v9.33a5.37 5.37 0 0 1-1.389 3.936 5.35 5.35 0 0 1-3.936 1.389h-9.33A5.33 5.33 0 0 1 3.399 20.6a5.33 5.33 0 0 1-1.389-3.936v-9.33A5.33 5.33 0 0 1 3.4 3.399 5.33 5.33 0 0 1 7.335 2.01Zm-.26 4.566a1.58 1.58 0 0 0-2.237 0l-.67.679c-.1.1-.1.27 0 .37l.055.054.246.244.497.496.605.604c.126.126.21.211.216.22.11.12.18.28.18.46 0 .359-.29.659-.66.659-.17 0-.33-.07-.44-.18L12.53 8.524a.217.217 0 0 0-.3 0l-4.765 4.765a1.8 1.8 0 0 0-.53 1.238l-.06 2.368c0 .13.04.25.13.34s.21.14.34.14h2.347c.48 0 .94-.19 1.29-.53l6.722-6.743c.61-.62.61-1.618 0-2.228Z"
    />
  </Svg>
);
export default IconlystEditSquareBold;
