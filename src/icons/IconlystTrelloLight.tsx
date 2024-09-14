import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrelloLight = ({
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
      d="M14.432 12.97h1.946a.973.973 0 0 0 .973-.972V8.106a.973.973 0 0 0-.973-.973h-1.946a.973.973 0 0 0-.973.973v3.892c0 .537.436.973.973.973M7.621 16.863h1.946a.973.973 0 0 0 .973-.973V8.106a.973.973 0 0 0-.973-.973H7.621a.973.973 0 0 0-.973.973v7.784c0 .537.436.973.973.973"
    />
  </Svg>
);
export default IconlystTrelloLight;
