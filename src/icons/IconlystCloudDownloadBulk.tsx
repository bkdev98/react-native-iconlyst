import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudDownloadBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M18.016 8.76a.21.21 0 0 1-.183-.18c-.295-2.108-2.01-4.74-5.331-4.74-3.572 0-5.04 2.91-5.325 4.742a.21.21 0 0 1-.183.177c-2.36.29-3.957 2.098-3.957 4.583a4.64 4.64 0 0 0 2.74 4.222 5.1 5.1 0 0 0 1.465.357c.156.013.255-.158.194-.302a2.49 2.49 0 0 1 .526-2.744c.5-.501 1.16-.736 1.816-.722a.214.214 0 0 0 .223-.208v-1.526a2.5 2.5 0 1 1 5 0v1.526c0 .119.103.211.222.208a2.47 2.47 0 0 1 1.816.722c.742.742.915 1.833.527 2.743-.061.145.038.316.195.302.377-.033.9-.124 1.488-.36a4.64 4.64 0 0 0 2.715-4.218c0-2.483-1.593-4.29-3.948-4.582"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m14.74 16.111-1.49 1.491v-5.184a.75.75 0 0 0-1.5 0v5.184l-1.49-1.491a.75.75 0 0 0-1.061 1.061l2.769 2.769q.106.106.248.165c.048.02.1.021.15.03.046.009.087.027.134.027s.089-.018.134-.027c.05-.009.102-.01.15-.03a.8.8 0 0 0 .249-.165l2.769-2.769a.75.75 0 1 0-1.061-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudDownloadBulk;
