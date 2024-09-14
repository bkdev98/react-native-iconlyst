import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarSquareLight = ({
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
      d="M7.782 3.063h8.435C19.165 3.063 21 5.143 21 8.089v7.948c0 2.945-1.835 5.026-4.784 5.026H7.782C4.834 21.063 3 18.982 3 16.037V8.089c0-2.945 1.842-5.026 4.782-5.026"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.652 10.277c0-.75-.607-1.357-1.356-1.357H10.99a1.639 1.639 0 0 0 0 3.276h2.09a1.574 1.574 0 1 1 0 3.15h-2.372c-.75 0-1.356-.609-1.356-1.357M12 7.781v8.565"
    />
  </Svg>
);
export default IconlystDollarSquareLight;
