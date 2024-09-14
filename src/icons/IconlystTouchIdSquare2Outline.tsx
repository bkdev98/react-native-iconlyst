import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTouchIdSquare2Outline = ({
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
      d="M5.087 5.879C4.41 6.606 4 7.669 4 8.985v7.948c0 1.318.409 2.38 1.084 3.106.67.72 1.66 1.17 2.948 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.788 1.085-3.106V8.985c0-1.318-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H8.032c-1.284 0-2.273.45-2.945 1.17M3.99 4.856C4.975 3.8 6.377 3.21 8.032 3.21h8.435c1.66 0 3.062.59 4.046 1.647C21.49 5.908 22 7.358 22 8.985v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H8.032c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.5-1.487-4.128V8.985c0-1.628.511-3.079 1.49-4.129"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.658 13.197a2.553 2.553 0 1 1 5.106 0v4.272a.75.75 0 0 1-1.5 0v-4.272a1.054 1.054 0 1 0-2.106 0v.483a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 9.201c-1.426 0-2.671.78-3.33 1.94a.75.75 0 1 1-1.304-.742 5.33 5.33 0 0 1 6.688-2.287.75.75 0 1 1-.579 1.384 3.8 3.8 0 0 0-1.474-.295M15.562 9.78a.75.75 0 0 1 1.045.18c.612.868.972 1.928.972 3.07v3.4a.75.75 0 0 1-1.5 0v-3.4c0-.823-.258-1.582-.697-2.205a.75.75 0 0 1 .18-1.045M10.408 15.096a.75.75 0 0 1 .75.75v1.623a.75.75 0 0 1-1.5 0v-1.623a.75.75 0 0 1 .75-.75M7.672 12.842a.75.75 0 0 1 .75.75v2.836a.75.75 0 0 1-1.5 0v-2.836a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTouchIdSquare2Outline;
