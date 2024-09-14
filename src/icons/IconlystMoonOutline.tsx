import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonOutline = ({
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
      d="M12.627 21.741c-1.44 0-2.91-.31-4.33-.93a8.88 8.88 0 0 1-4.54-4.57c-1.35-3.14-1.17-6.52.49-9.28a9.81 9.81 0 0 1 7.57-4.71.75.75 0 0 1 .8.91c-.53 2.37.19 5.03 1.77 6.61 1.54 1.54 4.46 2.8 7.06 2.21.23-.05.48 0 .66.17.18.16.28.39.26.63a9.78 9.78 0 0 1-4.73 7.6 9.7 9.7 0 0 1-4.99 1.37zm-1.64-17.86a8.3 8.3 0 0 0-5.45 3.85c-1.41 2.34-1.55 5.23-.39 7.92a7.4 7.4 0 0 0 3.76 3.79c2.69 1.19 5.59 1.06 7.95-.35a8.32 8.32 0 0 0 3.88-5.48c-2.59.2-5.5-.86-7.4-2.77-1.73-1.73-2.6-4.37-2.34-6.95z"
    />
  </Svg>
);
export default IconlystMoonOutline;
