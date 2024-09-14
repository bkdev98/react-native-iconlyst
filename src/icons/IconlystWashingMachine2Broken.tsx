import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWashingMachine2Broken = ({
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
      d="M12 21h3.786c2.649 0 4.296-1.868 4.296-4.514V7.514C20.082 4.869 18.435 3 15.787 3H8.213c-2.64 0-4.295 1.87-4.295 4.514v8.972C3.918 19.132 5.565 21 8.213 21h.724"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 11.234a3.366 3.366 0 1 1 0 6.732 3.366 3.366 0 0 1 0-6.732"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.343 14.329c-.402.04-.8.181-1.155.432-.35.25-.672.43-1.152.43s-.802-.18-1.152-.43a2.4 2.4 0 0 0-.822-.375M3.918 8.481h13.349M16.428 6.03h.01M14.363 6.03h.01M7.54 6.03h1.923"
    />
  </Svg>
);
export default IconlystWashingMachine2Broken;
