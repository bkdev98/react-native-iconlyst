import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPetStoreLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.786 4.14h12.428c.784 0 1.487.494 1.766 1.24l.894 2.602c.472 1.262-.442 2.613-1.766 2.613H4.892c-1.324 0-2.239-1.351-1.766-2.613L4.02 5.38c.28-.746.983-1.24 1.767-1.24M8.534 10.596l.906-6.454M15.562 10.596l-.906-6.454M4.79 10.603v9.858m14.42 0v-9.865M12.016 13.971v-.05m-.007-.15a.22.22 0 1 0 .002.44.22.22 0 0 0-.002-.44M15.209 15.593v-.05m-.007-.15a.22.22 0 1 0 .003.44.22.22 0 0 0-.003-.44M8.838 15.593v-.05m-.007-.15a.22.22 0 1 0 .003.44.22.22 0 0 0-.003-.44"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M12.047 20.419c1.337 0 3.033 1.158 3.008-.625-.01-1.338-1.402-2.593-3.008-2.595-1.616 0-3.22 1.364-2.998 2.755.246 1.613 1.812.465 2.998.465Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 20.815h3.5m14.5 0h-3.5"
    />
  </Svg>
);
export default IconlystPetStoreLight;
