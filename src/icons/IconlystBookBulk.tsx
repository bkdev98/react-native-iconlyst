import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookBulk = ({
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
      d="M10.587 20.653a2.81 2.81 0 0 0 2.824.002c1.266-.727 3.238-1.626 5.447-1.785 1.482-.097 2.642-1.318 2.642-2.78V5.75c0-.786-.336-1.54-.923-2.064a2.83 2.83 0 0 0-2.194-.701c-2.284.247-4.237 1.155-5.473 1.875a1.81 1.81 0 0 1-1.82-.001c-1.236-.72-3.188-1.627-5.471-1.874a2.81 2.81 0 0 0-2.195.7A2.77 2.77 0 0 0 2.5 5.752v10.34c0 1.46 1.16 2.68 2.641 2.779 2.211.159 4.184 1.058 5.446 1.783"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.75 4.942v15.99a2.8 2.8 0 0 1-1.5 0V4.942a1.81 1.81 0 0 0 1.5 0M8.616 10.83a.75.75 0 0 0 .277-1.447l-2.185-.87a.751.751 0 0 0-.554 1.393l2.185.87q.136.054.277.053M8.616 15.33a.75.75 0 0 0 .277-1.447l-2.185-.87a.75.75 0 0 0-.554 1.393l2.185.87q.136.054.277.053M15.386 10.83a.75.75 0 0 1-.277-1.447l2.185-.87a.751.751 0 0 1 .553 1.393l-2.185.87a.8.8 0 0 1-.277.053M15.386 15.33a.75.75 0 0 1-.277-1.447l2.185-.87a.75.75 0 0 1 .553 1.393l-2.185.87a.8.8 0 0 1-.277.053"
    />
  </Svg>
);
export default IconlystBookBulk;
