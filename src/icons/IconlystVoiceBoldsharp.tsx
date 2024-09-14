import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoiceBoldsharp = ({
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
      d="M20.005 13.229h1.5v-5.89h-1.5zM2.995 13.229h1.5v-5.89h-1.5zM12.25 2.479c-2.638 0-4.785 2.156-4.785 4.805v6.001a4.795 4.795 0 0 0 4.036 4.728v3.216H8.78v1.5h6.94v-1.5H13v-3.216a4.795 4.795 0 0 0 4.037-4.728V7.284c0-2.649-2.147-4.805-4.786-4.805"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVoiceBoldsharp;
