import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRainbowCloudyLight = ({
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
      d="M14.528 14.903c-1.158.01-2.093.788-2.093 2.112 0 .855.51 1.593 1.242 1.924.308.125.616.173.849.173h4.994c.233 0 .541-.046.854-.17a2.11 2.11 0 0 0 1.24-1.927c0-1.324-.934-2.102-2.092-2.112 0-.833-.653-2.498-2.496-2.498-1.845 0-2.498 1.665-2.498 2.498"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.76 11.145q-.298-.05-.604-.05a3.61 3.61 0 0 0-3.61 3.608v2.046"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.943 9.18a6.55 6.55 0 0 0-8.419.71 6.55 6.55 0 0 0-1.919 4.631v2.227"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.234 7.075a9.54 9.54 0 0 0-12.825.608 9.54 9.54 0 0 0-2.795 6.747v2.317"
    />
  </Svg>
);
export default IconlystRainbowCloudyLight;
