import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNewTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.868 12.17h2.15m.48-2.402h-2.63v4.804h2.63M15.922 9.768l.9 4.804 1.712-3.483 1.714 3.483.9-4.804M3.854 14.757V9.724L7.56 14.61v-5.03"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.95 17.5c.229.298.473.59.747.863a9 9 0 0 0 12.728 0c.274-.274.517-.565.748-.863M19.171 6.5a9 9 0 0 0-.748-.864 9 9 0 0 0-12.728 0 9 9 0 0 0-.748.864"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystNewTwoTone;
