import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKitchenHat2Broken = ({
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
      d="M9.984 16.42h3.526a1.41 1.41 0 0 0 1.407-1.31l.11-1.526a2.46 2.46 0 0 0 1.752-2.19c.075-1.084-.663-2.028-1.661-2.455-.464-.198-.78-.201-1.095-.158a2.31 2.31 0 0 0-2.02-1.199c-.874 0-1.624.485-2.02 1.199a1.95 1.95 0 0 0-.933.085c-.927.29-1.687 1.065-1.81 2.026a2.46 2.46 0 0 0 1.735 2.692"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.999 3H7.782C4.834 3 3 5.081 3 8.026v7.948C3 18.919 4.843 21 7.782 21h8.435C19.165 21 21 18.919 21 15.974V8.026C21 5.081 19.165 3 16.216 3h-.86"
    />
  </Svg>
);
export default IconlystKitchenHat2Broken;
