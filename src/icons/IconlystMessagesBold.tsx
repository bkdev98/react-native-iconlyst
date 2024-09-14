import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesBold = ({
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
      d="M14.33 12.685a1.035 1.035 0 0 1 0-2.069c.57 0 1.035.465 1.035 1.035s-.465 1.034-1.035 1.034m-4.648 0a1.036 1.036 0 0 1-1.036-1.034 1.036 1.036 0 0 1 2.07 0c0 .57-.464 1.034-1.034 1.034m11.159-2.16c-.41-4.15-3.692-7.497-7.801-7.958-2.453-.274-4.815.438-6.657 2.008-1.945 1.658-3.132 4.132-3.256 6.79-.248 5.317 4.067 9.36 8.458 10.605a.99.99 0 0 0 .883-.168c.258-.195.412-.504.412-.827l.03-1.543c5.126-.615 8.387-4.278 7.93-8.907"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesBold;
