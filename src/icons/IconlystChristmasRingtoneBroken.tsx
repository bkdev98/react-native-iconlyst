import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasRingtoneBroken = ({
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
      d="M18.436 15.918a1.95 1.95 0 0 1-1.764 2.779H7.329a1.95 1.95 0 0 1-1.763-2.78l.398-.845c.283-.602.43-1.26.43-1.926v-1.125a5.6 5.6 0 0 1 2.914-4.919M14.652 19.138a2.655 2.655 0 0 1-4.765 1.61M17.792 5.192c0 1.61-.51 3.983-4.628.905"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.954 6.097c-4.377 3.078-4.918.705-4.918-.905 0-1.346.379-3.227 3.066-2.003"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.954 4.203c0-.346.28-.626.625-.626h.96c.346 0 .626.28.626.626v1.98c0 .345-.28.626-.626.626h-.96a.626.626 0 0 1-.625-.626zM17.607 12.02a5.6 5.6 0 0 0-2.914-4.918"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.164 4.288c1.915-1.431 3.05-1.684 3.716-1.383"
    />
  </Svg>
);
export default IconlystChristmasRingtoneBroken;
