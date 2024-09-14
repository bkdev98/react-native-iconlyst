import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountUpOutline = ({
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
      d="M3.99 3.897C4.975 2.841 6.377 2.25 8.032 2.25h4.543a.75.75 0 0 1 0 1.5H8.032c-1.284 0-2.273.45-2.945 1.17C4.41 5.647 4 6.71 4 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V12.89a.75.75 0 0 1 1.5 0v3.083c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H8.032c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.772 2.25a.75.75 0 0 1 .75.75v5.842a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.771 2.25c.2 0 .39.08.531.22l2.48 2.49a.75.75 0 1 1-1.063 1.058L18.77 4.063l-1.947 1.955a.75.75 0 1 1-1.063-1.058l2.479-2.49a.75.75 0 0 1 .531-.22M14.29 10.024a.75.75 0 0 1 0 1.061l-4.896 4.897a.75.75 0 1 1-1.061-1.06l4.897-4.898a.75.75 0 0 1 1.06 0M12.693 15.384a.946.946 0 1 1 1.892 0 .946.946 0 0 1-1.892 0M7.93 10.618a.946.946 0 1 1 1.892 0 .946.946 0 0 1-1.892 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiscountUpOutline;
