import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGarlicTwoTone = ({
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
      d="M15.753 18.893c4.906 0 5.16-4.024 3.651-6.543-1.278-2.135-3.91-3.14-5.396-5.427-.737-1.136-.396-3.423-.396-3.423h-2.278s-.697 2.344-1.56 3.564c-1.558 2.198-4.752 4.376-5.72 6.9-.622 1.625-.175 3.764 1.316 4.772.757.512 1.846.797 3.37.548"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.069 20.5c2.354 0 4.294-1.8 4.294-4.468 0-1.6-1.095-2.835-1.808-3.7m-2.38 8.168c-2.313 0-4.002-1.623-4.002-4.215 0-2.207 1.743-3.95 2.388-5.812"
    />
  </Svg>
);
export default IconlystGarlicTwoTone;
