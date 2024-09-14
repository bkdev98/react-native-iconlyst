import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailOpen4Broken = ({
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
      d="M12 20.761h4.418C19.155 20.768 21 19.135 21 16.37v-5.845c0-1.002-.49-1.94-1.312-2.513l-6.16-4.292a2.67 2.67 0 0 0-3.056 0l-6.16 4.292A3.06 3.06 0 0 0 3 10.525v5.845c0 2.765 1.845 4.398 4.582 4.391h.748"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.459 9.18c1.703 0 2.85.997 2.85 2.71l-4.005 3.252a2.07 2.07 0 0 1-2.574 0L6.691 11.89c0-1.713 1.146-2.71 2.832-2.71h1.918"
    />
  </Svg>
);
export default IconlystEmailOpen4Broken;
