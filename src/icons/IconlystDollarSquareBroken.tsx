import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarSquareBroken = ({
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
      d="M14.652 10.278c0-.748-.607-1.356-1.356-1.356H10.99a1.639 1.639 0 0 0 0 3.276h2.09a1.574 1.574 0 1 1 0 3.149h-2.372c-.75 0-1.356-.608-1.356-1.356M12 7.781v8.565"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.999 21.063H7.782C4.834 21.063 3 18.98 3 16.035V8.09c0-2.945 1.843-5.026 4.782-5.026h8.435c2.948 0 4.783 2.08 4.783 5.026v7.947c0 2.945-1.835 5.026-4.784 5.026h-.666"
    />
  </Svg>
);
export default IconlystDollarSquareBroken;
