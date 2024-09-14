import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperDownload2TwoTonesharp = ({
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
      d="M14.342 3.443V8.79h5.107"
    />
    <G
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M11.113 17.672V9.825M8.526 15.085c1.33 0 2.587 1.171 2.587 2.587M13.7 15.085c-1.33 0-2.587 1.171-2.587 2.587" />
    </G>
  </Svg>
);
export default IconlystPaperDownload2TwoTonesharp;
