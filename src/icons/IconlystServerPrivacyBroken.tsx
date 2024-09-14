import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerPrivacyBroken = ({
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
      d="M8.026 3C5.081 3 3 4.834 3 7.782v8.434C3 19.165 5.081 21 8.026 21h3.083M21 10.784V7.782C21 4.842 18.919 3 15.974 3H12M20.573 17.312c0 2.452-2.936 3.341-2.936 3.341s-2.937-.89-2.937-3.341-.107-2.375.129-2.61c.235-.236 2.422-.999 2.808-.999s2.807.998 2.807.998M7.363 7.865h.523m-.523 8.27h.523M12.104 7.865h4.534M12.22 12H3.023"
    />
  </Svg>
);
export default IconlystServerPrivacyBroken;
