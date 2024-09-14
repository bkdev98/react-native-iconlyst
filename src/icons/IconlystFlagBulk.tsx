import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlagBulk = ({
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
      fill={props.color}
      d="m17.808 2.745 2.818 7.86a.75.75 0 0 1-.102.697c-.075.103-1.897 2.49-6.68 2.206-3.057-.183-4.341 1.057-4.747 1.595l1.844 5.145h5.328q.027 0 .054.002H4.026l.055-.002h5.267L4.744 7.408a.75.75 0 0 1 .028-.574c.057-.12 1.47-2.964 6.346-2.682 3.908.232 5.327-1.53 5.385-1.606a.77.77 0 0 1 .714-.286.75.75 0 0 1 .59.485"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.323 20.25H4.026a.75.75 0 0 0 .055 1.498h12.188a.75.75 0 0 0 .054-1.498"
    />
  </Svg>
);
export default IconlystFlagBulk;
