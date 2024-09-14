import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBagLightsharp = ({
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
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M16.723 7.189a4.154 4.154 0 0 0-4.154-4.154 4.154 4.154 0 0 0-4.172 4.154M15.42 11.518h-.044M9.812 11.518h-.044"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m20.122 7.4.888 14.635H3.49L4.378 7.4z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBagLightsharp;
