import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraAiAltLight = ({
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
      d="M13.965 4.137c.825 0 1.58.455 1.97 1.182.253.474.53.952.708 1.148.339.355.804.565 1.295.583A3.06 3.06 0 0 1 21 10.112v5.644a4.107 4.107 0 0 1-4.106 4.107H7.106A4.106 4.106 0 0 1 3 15.756v-5.642a3.06 3.06 0 0 1 3.062-3.058c.491-.02.955-.229 1.295-.585.182-.2.475-.698.742-1.181a2.23 2.23 0 0 1 1.954-1.153z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.953 14.424-.097-.262a3.62 3.62 0 0 0-2.135-2.138l-.262-.097.262-.098a3.62 3.62 0 0 0 2.135-2.137l.097-.263.097.263a3.62 3.62 0 0 0 2.134 2.137l.263.098-.262.097a3.62 3.62 0 0 0-2.135 2.138zM15.365 15.87a1.77 1.77 0 0 0-1.177-1.179 1.77 1.77 0 0 0 1.177-1.178 1.77 1.77 0 0 0 1.176 1.178 1.77 1.77 0 0 0-1.176 1.179"
    />
  </Svg>
);
export default IconlystCameraAiAltLight;
