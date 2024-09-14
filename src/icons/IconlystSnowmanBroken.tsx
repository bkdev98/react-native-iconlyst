import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnowmanBroken = ({
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
      d="m7.01 13.709-3.1-2.442M7.55 7.81a4.446 4.446 0 1 0 1.06-2.879M20.09 11.267l-3.097 2.46c.39.763.612 1.646.612 2.562a5.6 5.6 0 0 1-2.91 4.916c-1.901.89-3.705.869-5.388 0-.812-.42-1.518-1.085-2.032-1.9M10.639 12.214v2.3M13.321 6.577v.01M12.492 15.432v.01M12.492 17.965v.01M10.677 6.577v.01M6.217 21.865h11.566M12 8.41l-.829.465"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.396 16.29a5.6 5.6 0 0 1 2.91-4.916"
    />
  </Svg>
);
export default IconlystSnowmanBroken;
