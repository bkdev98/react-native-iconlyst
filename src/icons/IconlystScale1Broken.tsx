import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScale1Broken = ({
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
      d="M7.815 3.021c-2.942 0-5.152 1.791-4.773 5.015l.848 7.928c.391 3.163 1.187 5.014 4.772 5.014h6.676c3.613 0 4.364-1.85 4.755-5.014l.864-7.928c.38-3.224-1.83-5.015-4.771-5.015h-4.844"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 6.816a4.813 4.813 0 0 0-4.812 4.814h9.626c0-1.58-.76-2.98-1.934-3.858M16.506 16.902H4.168M12 11.627V9.61"
    />
  </Svg>
);
export default IconlystScale1Broken;
