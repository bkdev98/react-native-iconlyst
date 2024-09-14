import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearch2Outline = ({
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
      d="M11.882 3.75a7.668 7.668 0 1 0 5.183 13.318l.015-.014.057-.052A7.667 7.667 0 0 0 11.883 3.75m6.788 13.83a9.14 9.14 0 0 0 2.38-6.162 9.167 9.167 0 0 0-9.168-9.168 9.167 9.167 0 0 0-9.167 9.168 9.168 9.168 0 0 0 14.858 7.188l2.933 2.925a.75.75 0 0 0 1.06-1.062zM12.865 6.524a.75.75 0 0 1 .936-.5 5.23 5.23 0 0 1 3.447 3.387.75.75 0 1 1-1.427.461 3.73 3.73 0 0 0-2.457-2.412.75.75 0 0 1-.499-.936"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearch2Outline;
