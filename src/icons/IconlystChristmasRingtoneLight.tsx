import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasRingtoneLight = ({
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
      d="M14.693 7.102a5.6 5.6 0 0 1 2.914 4.919v1.125c0 .667.147 1.324.431 1.926l.398.846a1.95 1.95 0 0 1-1.764 2.779H7.329a1.95 1.95 0 0 1-1.763-2.78l.398-.845c.283-.602.43-1.26.43-1.926v-1.125a5.6 5.6 0 0 1 2.914-4.919M9.344 19.138a2.655 2.655 0 1 0 5.308 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.164 6.097c4.118 3.078 4.628.705 4.628-.905s-.51-3.982-4.628-.904M10.954 6.097c-4.377 3.078-4.918.705-4.918-.905s.541-3.982 4.918-.904"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.954 4.203c0-.346.28-.626.626-.626h.96c.345 0 .625.28.625.626v1.98c0 .345-.28.626-.626.626h-.96a.626.626 0 0 1-.625-.626z"
    />
  </Svg>
);
export default IconlystChristmasRingtoneLight;
