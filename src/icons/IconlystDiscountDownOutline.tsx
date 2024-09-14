import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountDownOutline = ({
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
      d="M3.99 3.897C4.975 2.841 6.376 2.25 8.032 2.25h5.05a.75.75 0 0 1 0 1.5h-5.05c-1.284 0-2.273.45-2.945 1.17C4.41 5.647 4 6.71 4 8.026v7.947c0 1.318.409 2.38 1.084 3.106.67.72 1.66 1.17 2.948 1.17h8.433c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V12.89a.75.75 0 0 1 1.5 0v3.082c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H8.032c-1.66 0-3.062-.591-4.046-1.648C3.008 19.051 2.5 17.6 2.5 15.973V8.026c0-1.628.511-3.078 1.49-4.129"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.772 2.25a.75.75 0 0 1 .75.75v5.841a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.764 5.82a.75.75 0 0 1 1.06.002l1.948 1.955 1.947-1.955a.75.75 0 1 1 1.062 1.059l-2.478 2.488a.75.75 0 0 1-1.062 0l-2.48-2.488a.75.75 0 0 1 .003-1.06M14.293 9.946a.75.75 0 0 1 0 1.06l-4.897 4.898a.75.75 0 0 1-1.061-1.06l4.897-4.898a.75.75 0 0 1 1.06 0M12.695 15.305a.946.946 0 1 1 1.892 0 .946.946 0 0 1-1.892 0M7.932 10.548a.946.946 0 1 1 1.892 0 .946.946 0 0 1-1.892 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiscountDownOutline;
