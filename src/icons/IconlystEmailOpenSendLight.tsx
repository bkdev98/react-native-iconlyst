import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailOpenSendLight = ({
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
      d="M19.276 14.42v1.531c0 2.499-1.668 3.98-4.142 3.97H7.143C4.669 19.932 3 18.45 3 15.952V10.67c0-.48.122-.936.35-1.342.204-.367.489-.692.838-.936l5.567-3.875a2.4 2.4 0 0 1 2.766 0l2.394 1.661"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.354 9.328 5.916 4.769c1.115.879 2.685.879 3.793 0l.683-.553"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.641 13.455a4.311 4.311 0 1 1 6.098-6.097 4.311 4.311 0 0 1-6.098 6.097"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.168 9.692 2.195.04.039 2.194M17.363 9.731l-3.554 3.555"
    />
  </Svg>
);
export default IconlystEmailOpenSendLight;
