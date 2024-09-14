import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSparksAiAltLight = ({
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
      d="M15.437 9.227a9.67 9.67 0 0 0-6.219 6.22A9.67 9.67 0 0 0 3 9.226a9.67 9.67 0 0 0 6.218-6.219 9.67 9.67 0 0 0 6.219 6.219M21 17.562a5.33 5.33 0 0 0-3.429 3.43 5.33 5.33 0 0 0-3.429-3.43 5.33 5.33 0 0 0 3.43-3.429A5.33 5.33 0 0 0 21 17.563"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSparksAiAltLight;
