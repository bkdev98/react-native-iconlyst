import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPot1Bulk = ({
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
      d="M4.3 12.75H3a.75.75 0 0 1 0-1.5h18a.75.75 0 0 1 0 1.5h-1.299l.008 3.788c0 1.282-.4 2.417-1.163 3.237-.767.824-1.862 1.287-3.165 1.287H8.628c-1.303 0-2.399-.463-3.165-1.287C4.7 18.955 4.3 17.82 4.3 16.538z"
    />
    <Path
      fill={props.color}
      d="M10.069 3.25a.75.75 0 0 1 .75-.75h2.371a.75.75 0 1 1 0 1.5h-.346v1.075c3.069.239 5.69 1.626 6.559 4.425a.5.5 0 0 1-.478.648H5.075a.5.5 0 0 1-.478-.648c.885-2.856 3.598-4.25 6.747-4.438V4h-.525a.75.75 0 0 1-.75-.75"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPot1Bulk;
