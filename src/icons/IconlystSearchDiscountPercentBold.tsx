import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchDiscountPercentBold = ({
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
      d="m13.714 9.288-4.33 4.33a.7.7 0 0 1-.53.22c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l4.33-4.33c.29-.29.77-.29 1.06 0 .29.3.29.77 0 1.06m-.56 4.49h-.04c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75.41 0 .77.34.77.75 0 .42-.31.75-.73.75m-4.24-5.71c.41 0 .78.34.78.75 0 .42-.31.75-.73.75h-.05a.749.749 0 1 1 0-1.5m2.22-5.57a8.42 8.42 0 1 0 0 16.84 8.42 8.42 0 0 0 0-16.84M20.993 19.794l-1.984-1.979a1.001 1.001 0 0 0-1.412 1.417l1.984 1.978a1 1 0 1 0 1.412-1.416"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchDiscountPercentBold;
