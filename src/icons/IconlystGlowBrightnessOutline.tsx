import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGlowBrightnessOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M5.356 6.021a.75.75 0 0 1 1.061 0L8.274 7.88a.75.75 0 1 1-1.06 1.06L5.355 7.082a.75.75 0 0 1 0-1.06m13.788 0a.75.75 0 0 1 0 1.061l-1.857 1.857a.75.75 0 1 1-1.06-1.06l1.856-1.858a.75.75 0 0 1 1.061 0m-10.87 10.87a.75.75 0 0 1 0 1.061L6.417 19.81a.75.75 0 0 1-1.06-1.06l1.856-1.858a.75.75 0 0 1 1.061 0m7.954 0a.75.75 0 0 1 1.06 0l1.857 1.858a.75.75 0 1 1-1.06 1.06l-1.858-1.857a.75.75 0 0 1 0-1.06M12.249 3.166a.75.75 0 0 1 .75.75v2.627a.75.75 0 0 1-1.5 0V3.916a.75.75 0 0 1 .75-.75M2.5 12.916a.75.75 0 0 1 .75-.75h2.627a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75m15.373 0a.75.75 0 0 1 .75-.75h2.627a.75.75 0 0 1 0 1.5h-2.627a.75.75 0 0 1-.75-.75m-5.624 5.623a.75.75 0 0 1 .75.75v2.627a.75.75 0 0 1-1.5 0v-2.627a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGlowBrightnessOutline;
