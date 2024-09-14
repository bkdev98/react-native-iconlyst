import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerPrivacyLight = ({
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
      d="M21 10.784V7.782C21 4.842 18.919 3 15.974 3H8.026C5.081 3 3 4.834 3 7.782v8.434C3 19.165 5.081 21 8.026 21h3.083"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.637 20.653s2.936-.89 2.936-3.341.107-2.373-.13-2.61c-.235-.238-2.421-.999-2.806-.999s-2.573.763-2.809.998c-.235.236-.128.159-.128 2.61 0 2.453 2.937 3.342 2.937 3.342"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.363 7.865h.523m-.523 8.27h.523M12.104 7.865h4.534M12.22 12H3.023"
    />
  </Svg>
);
export default IconlystServerPrivacyLight;
