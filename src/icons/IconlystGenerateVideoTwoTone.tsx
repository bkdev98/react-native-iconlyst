import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGenerateVideoTwoTone = ({
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
      d="M12.64 4.754H5.85C3.483 4.754 2 6.43 2 8.8v6.397c0 2.371 1.476 4.047 3.85 4.047h6.79c2.373 0 3.851-1.676 3.851-4.047V8.801c0-2.371-1.478-4.047-3.85-4.047"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.484 9.99 3.407-2.788a1.292 1.292 0 0 1 2.11 1l-.013 7.602a1.29 1.29 0 0 1-2.11.995l-3.394-2.787"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.482 13.793-.092-.248a3.41 3.41 0 0 0-2.013-2.017l-.248-.091.248-.092A3.41 3.41 0 0 0 7.39 9.328l.092-.247.091.247a3.41 3.41 0 0 0 2.014 2.017l.248.092-.248.091a3.41 3.41 0 0 0-2.013 2.017zM12.295 14.919a1.6 1.6 0 0 0-1.066-1.069c.51-.155.91-.556 1.066-1.068.156.512.556.913 1.067 1.068-.511.156-.911.557-1.067 1.069"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGenerateVideoTwoTone;
