import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSanitizerBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.375 12.75a3 3 0 0 1 3-3h5.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-5.25a3 3 0 0 1-3-3zM10.138 15.375H12m0 0h1.862m-1.862 0v-1.862m0 1.862v1.862M14.25 9.75V7.875a1.5 1.5 0 0 0-1.5-1.5h-1.5a1.5 1.5 0 0 0-1.5 1.5V9.75M12 6.375V3M9.75 3h4.797a2 2 0 0 1 1.414.586l1.664 1.664"
    />
  </Svg>
);
export default IconlystSanitizerBroken;
