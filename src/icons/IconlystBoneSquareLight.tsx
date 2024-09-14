import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoneSquareLight = ({
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
      d="M7.783 3.3h8.435C19.166 3.3 21 5.383 21 8.328v7.947c0 2.946-1.834 5.027-4.783 5.027H7.783C4.835 21.3 3 19.22 3 16.274V8.327c0-2.945 1.844-5.026 4.783-5.026"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.687 7.53a1.584 1.584 0 0 0 0 2.24L9.65 12.807a1.583 1.583 0 1 0-2.24 2.239c.45.45 1.102.567 1.662.364a1.58 1.58 0 0 0 2.604 1.66 1.58 1.58 0 0 0 0-2.238l3.036-3.037a1.584 1.584 0 0 0 2.24-2.24 1.58 1.58 0 0 0-1.662-.363 1.58 1.58 0 0 0-2.603-1.662"
    />
  </Svg>
);
export default IconlystBoneSquareLight;
