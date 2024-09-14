import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMedalTwoTone = ({
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
      d="m19.029 3.01-3.37 6.72m-5.925-.062L5.972 3.012m3.857 0 2.905 5.226v.01l.413.742M15.367 3l-2.63 5.24m-6.169 6.736c0 3.327 2.7 6.024 6.024 6.024a6.026 6.026 0 0 0 6.024-6.024 6.025 6.025 0 0 0-12.047 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.843 12.275.569 1.136c.056.112.163.19.288.207l1.272.184a.376.376 0 0 1 .213.644l-.92.884a.37.37 0 0 0-.11.335l.217 1.248a.383.383 0 0 1-.556.4l-1.138-.59a.39.39 0 0 0-.356 0l-1.138.59a.38.38 0 0 1-.556-.399l.218-1.25a.37.37 0 0 0-.11-.333l-.921-.885a.376.376 0 0 1 .212-.644l1.273-.183a.38.38 0 0 0 .287-.207l.57-1.137a.386.386 0 0 1 .686 0"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMedalTwoTone;
