import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperUpload2TwoTonesharp = ({
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
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M14.818 2.889H4.575v18.5h15.35V8.207z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M14.343 3.443V8.79h5.107"
    />
    <G
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M11.114 10.62v7.846M8.527 13.207c1.33 0 2.587-1.172 2.587-2.587M13.701 13.207c-1.33 0-2.587-1.172-2.587-2.587" />
    </G>
  </Svg>
);
export default IconlystPaperUpload2TwoTonesharp;
