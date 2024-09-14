import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareLock3Outline = ({
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
      d="M16.466 22.709H8.032c-3.308 0-5.532-2.321-5.532-5.776V8.985c0-3.455 2.224-5.776 5.532-5.776h8.435C19.776 3.209 22 5.53 22 8.985v7.948c0 3.455-2.224 5.776-5.534 5.776m-8.434-18C5.583 4.709 4 6.388 4 8.985v7.948c0 2.6 1.583 4.276 4.032 4.276h8.434c2.45 0 4.034-1.678 4.034-4.276V8.985c0-2.6-1.583-4.276-4.033-4.276z"
    />
    <Path
      fill={props.color}
      d="M13.29 17.143h-2.08a1.634 1.634 0 0 1-1.55-2.149l.491-1.48a2.8 2.8 0 0 1-.737-1.9 2.835 2.835 0 1 1 5.67 0 2.8 2.8 0 0 1-.735 1.9l.492 1.48a1.635 1.635 0 0 1-1.551 2.15m-1.04-6.864a1.337 1.337 0 0 0-1.335 1.335 1.32 1.32 0 0 0 .548 1.07.75.75 0 0 1 .267.84l-.646 1.943a.12.12 0 0 0 .02.12.12.12 0 0 0 .106.056h2.081a.13.13 0 0 0 .11-.056.12.12 0 0 0 .017-.119l-.646-1.944a.75.75 0 0 1 .267-.84 1.32 1.32 0 0 0 .546-1.07 1.337 1.337 0 0 0-1.335-1.335"
    />
    <Path
      fill={props.color}
      d="M21.25 14.1h-7.74a.75.75 0 1 1 0-1.5h7.74a.75.75 0 1 1 0 1.5m-10.254 0H3.25a.75.75 0 1 1 0-1.5h7.746a.75.75 0 1 1 0 1.5"
    />
  </Svg>
);
export default IconlystSquareLock3Outline;
