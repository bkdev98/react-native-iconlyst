import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarSquareTwoTone = ({
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
      d="M8.282 3.063h8.435c2.948 0 4.783 2.081 4.783 5.026v7.948c0 2.945-1.835 5.026-4.784 5.026H8.282c-2.948 0-4.782-2.081-4.782-5.026V8.089c0-2.945 1.842-5.026 4.782-5.026"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.152 10.277c0-.75-.607-1.357-1.356-1.357H11.49a1.639 1.639 0 0 0 0 3.276h2.09a1.574 1.574 0 1 1 0 3.15h-2.372c-.75 0-1.356-.609-1.356-1.357M12.5 7.781v8.565"
    />
  </Svg>
);
export default IconlystDollarSquareTwoTone;
