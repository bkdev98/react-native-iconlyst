import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwipeRightBold = ({
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
      d="m11.894 8.953-.071-4.586a1.773 1.773 0 0 0-3.546.027v10.17L7.01 12.723a1.94 1.94 0 0 0-2.29-.71c-.943.363-1.449 1.388-1.105 2.339.643 1.772 1.66 3.75 2.972 5.379 2.066 2.569 8.373 2.397 10.631.14 1.77-1.769 2.763-5.376 1.753-8.1-1.003-2.709-4.595-2.58-7.076-2.818M20.432 5.051a.79.79 0 0 0-.173-.87L18.7 2.623a.791.791 0 0 0-1.12 1.119l.212.21h-3.116a.792.792 0 0 0 0 1.583h3.12l-.215.216A.79.79 0 1 0 18.7 6.87l1.563-1.564c.07-.07.12-.153.158-.24q.006-.007.01-.014"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwipeRightBold;
