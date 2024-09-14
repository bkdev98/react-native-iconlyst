import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarSquare2Light = ({
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
      d="M14.174 10.355v-.079c0-.748-.606-1.356-1.355-1.356h-1.357a1.639 1.639 0 0 0 0 3.276h1.139a1.575 1.575 0 0 1 0 3.15h-1.42a1.356 1.356 0 0 1-1.356-1.357M12 16.349v-.999m0-6.434V7.783"
    />
  </Svg>
);
export default IconlystDollarSquare2Light;
