import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudCheckBulk = ({
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
      d="M18.008 8.81a.21.21 0 0 1-.182-.177c-.285-1.832-1.753-4.742-5.324-4.742-3.572 0-5.04 2.91-5.325 4.742a.21.21 0 0 1-.183.177c-2.36.289-3.957 2.098-3.957 4.584a4.64 4.64 0 0 0 2.74 4.222c.5.203.953.296 1.307.338.145.017.25-.128.214-.269-.21-.826.007-1.74.655-2.385a2.5 2.5 0 0 1 3.536.002l.378.38a.2.2 0 0 0 .283 0l2.805-2.806a2.5 2.5 0 1 1 3.537 3.534l-1.253 1.252a.192.192 0 0 0 .136.328c.348 0 1.05-.048 1.874-.378a4.64 4.64 0 0 0 2.715-4.218c0-2.486-1.597-4.295-3.956-4.584"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.008 20.108a.75.75 0 0 1-.531-.22l-2.288-2.292a.75.75 0 1 1 1.06-1.06l1.759 1.761 4.185-4.187a.75.75 0 1 1 1.06 1.061l-4.715 4.717a.75.75 0 0 1-.53.22"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudCheckBulk;
