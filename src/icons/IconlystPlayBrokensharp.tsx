import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayBrokensharp = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 12.604a9.25 9.25 0 1 1-1.58-5.172"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="m15.171 12.599-4.507-2.862v5.724z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlayBrokensharp;
