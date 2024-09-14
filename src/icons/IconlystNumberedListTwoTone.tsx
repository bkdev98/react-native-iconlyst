import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNumberedListTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.5 16.766a2 2 0 1 1 4 0c0 .48-.214 1.214-.95 1.877-.736.661-2.741 2.123-2.741 2.123h3.69M6.5 10.765v-6L4.652 6.255"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.834 6.766H20.5m-8.666 6H20.5m-8.666 5.999H20.5"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystNumberedListTwoTone;
