import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashAutoBold = ({
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
      d="m17.58 18.135.571-1.223.572 1.223zm3.974 2.515-.959-2.053-.005-.01-1.76-3.764c-.248-.528-1.11-.528-1.359 0l-2.724 5.827a.75.75 0 0 0 1.36.634l.771-1.65h2.546l.771 1.65a.75.75 0 0 0 1.36-.634M17.2 9.917a1.41 1.41 0 0 0-1.263-.774h-4.551v-4.84c0-.624-.384-1.154-.98-1.347a1.4 1.4 0 0 0-1.585.514l-6.175 8.504a1.416 1.416 0 0 0 1.148 2.25h4.552v4.839c0 .626.384 1.156.979 1.349q.224.073.45.072c.442 0 .86-.21 1.135-.588l6.174-8.502c.314-.434.359-1 .116-1.477"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlashAutoBold;
