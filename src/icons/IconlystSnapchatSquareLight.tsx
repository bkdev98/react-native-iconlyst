import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnapchatSquareLight = ({
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
      d="M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.666 9.878a2.667 2.667 0 0 0-2.928-2.655c-1.387.134-2.402 1.38-2.404 2.772-.005 2.256-.153 3.4-2.25 4.317.963.425 1.077.474 1.465 1.273a.67.67 0 0 0 .534.38c1.365.11 1.908.825 2.916.825 1.01 0 1.552-.715 2.917-.825a.67.67 0 0 0 .535-.38c.388-.799.502-.848 1.465-1.273-2.134-.933-2.25-2.1-2.25-4.434"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.658 10.438c.567.322 1.08.831 1.566 1.432M16.343 10.438c-.567.322-1.08.831-1.566 1.432"
    />
  </Svg>
);
export default IconlystSnapchatSquareLight;
