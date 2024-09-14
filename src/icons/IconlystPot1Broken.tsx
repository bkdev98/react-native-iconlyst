import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPot1Broken = ({
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
      d="M15.38 20.562c2.361 0 3.83-1.666 3.83-4.025l-.01-4.643c0-3.976-3.224-6.164-7.2-6.164s-7.2 2.188-7.2 6.164v4.643c0 2.359 1.468 4.024 3.828 4.024h3.376M12.094 3.438V5.73m-1.276-2.293h2.372M3 10.8h18"
    />
  </Svg>
);
export default IconlystPot1Broken;
