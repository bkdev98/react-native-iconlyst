import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBakeryTokenBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.475 20.944c5.432.597 10.025-3.637 10.025-8.942v-.012c-.001-.655-.55-1.18-1.206-1.18h-1.939a4.62 4.62 0 0 1-3.29-1.366l-.004-.005A4.64 4.64 0 0 1 13.7 6.154V4.206C13.7 3.55 13.176 3 12.52 3h-.023c-5.305 0-9.538 4.593-8.94 10.025.31 2.816 1.962 5.265 4.292 6.68"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 15.628a3.627 3.627 0 1 0-2.978-1.558"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.848 14.76s2.001-1.7 2.953-.527c.951 1.172-.766 2.532-.308 3.452.573 1.153 2.13-.184 2.13-.184M6.157 5.658a2.69 2.69 0 0 0 3.806 3.806"
    />
  </Svg>
);
export default IconlystBakeryTokenBroken;