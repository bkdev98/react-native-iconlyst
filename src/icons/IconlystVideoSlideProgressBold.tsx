import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoSlideProgressBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M18.082 17.23h-6.269a.75.75 0 0 1-1.499-.04v-1.648a.75.75 0 1 1 1.5 0v.189h6.268a.75.75 0 0 1 0 1.5m-7.687-8.903c.074-.565.371-1.027.817-1.284.463-.263 1.034-.288 1.566-.063a7.7 7.7 0 0 1 2.345 1.47c.411.373.642.862.644 1.372.002.512-.227 1.006-.643 1.389l-.006.006a8.1 8.1 0 0 1-2.347 1.479 2 2 0 0 1-.747.148c-.298 0-.583-.076-.836-.226-.435-.26-.724-.724-.792-1.275a14 14 0 0 1-.001-3.016M8.767 17.23H7.586a.75.75 0 0 1 0-1.5h1.181a.75.75 0 0 1 0 1.5m9.038-13.84H7.862a4.534 4.534 0 0 0-4.528 4.53v8.16a4.534 4.534 0 0 0 4.528 4.53h9.943a4.535 4.535 0 0 0 4.529-4.53v-8.16a4.535 4.535 0 0 0-4.529-4.53"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.956 11.33c.038.021.132.024.258-.026a6.6 6.6 0 0 0 1.895-1.197c.06-.055.158-.164.158-.279 0-.113-.098-.219-.156-.27a6.2 6.2 0 0 0-1.903-1.19.5.5 0 0 0-.17-.04.16.16 0 0 0-.079.017c-.05.03-.068.115-.074.164-.095.835-.095 1.736.002 2.666.008.068.036.135.07.155"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoSlideProgressBold;
