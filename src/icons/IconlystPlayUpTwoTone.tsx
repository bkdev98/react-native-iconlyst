import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayUpTwoTone = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.266 15.066c-1.125-2.791-3.484-6.465-5.323-8.495q-2.44-2.778-4.881 0C8.224 8.6 5.865 12.275 4.74 15.066"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.266 15.066c.72 2.27-.223 3.594-2.79 3.992a43 43 0 0 1-4.974.258 43 43 0 0 1-4.972-.258c-2.558-.412-3.527-1.72-2.79-3.992"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPlayUpTwoTone;
