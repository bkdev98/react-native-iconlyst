import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShrinkAltOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M13.25 14a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-5.25V20a.75.75 0 0 1-1.5 0zM10 3.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h5.25V4a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShrinkAltOutline;
