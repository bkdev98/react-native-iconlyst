import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchHeartrate1Outline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.882 3.75a7.668 7.668 0 1 0 5.183 13.318l.015-.014.057-.052A7.667 7.667 0 0 0 11.883 3.75m6.788 13.83a9.14 9.14 0 0 0 2.38-6.162 9.167 9.167 0 0 0-9.168-9.168 9.167 9.167 0 0 0-9.167 9.168 9.168 9.168 0 0 0 14.858 7.188l2.933 2.925a.75.75 0 0 0 1.06-1.062zM10.638 7.018a.75.75 0 0 1 .712.513l1.662 4.988.476-1.427a.75.75 0 0 1 .712-.513h1.583a.75.75 0 0 1 0 1.5H14.74l-1.016 3.049a.75.75 0 0 1-1.423 0l-1.663-4.988-.475 1.427a.75.75 0 0 1-.712.512H7.868a.75.75 0 0 1 0-1.5h1.043L9.927 7.53a.75.75 0 0 1 .711-.513"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchHeartrate1Outline;
