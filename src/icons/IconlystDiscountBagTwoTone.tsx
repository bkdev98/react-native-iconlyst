import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountBagTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.19 13.05-3.924 3.923M12.183 16.959l.006.007M8.26 13.05h.006"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.27 8.948V6.321a2.956 2.956 0 0 1 5.912 0v2.627"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.41 7.013v-.308c0-1.184.646-2.217 1.605-2.766M16.78 7.028v-.323c0-1.381-.88-2.557-2.11-2.998"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.813 7.038h-5.89a1.5 1.5 0 0 0-1.495 1.387l-.889 11.827a1.5 1.5 0 0 0 1.496 1.613H12M12.354 7.038h2.128a1.5 1.5 0 0 1 1.496 1.387l.888 11.827a1.5 1.5 0 0 1-1.496 1.613h-3.016"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.814 7.038h5.89a1.5 1.5 0 0 1 1.491 1.34l1.262 11.828a1.5 1.5 0 0 1-1.492 1.659H12"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDiscountBagTwoTone;