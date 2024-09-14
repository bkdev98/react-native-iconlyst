import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchCheckBold = ({
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
      fillRule="evenodd"
      d="m14.685 9.541-3.8 3.79c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.9-1.9a.754.754 0 0 1 0-1.06c.29-.29.76-.29 1.06 0l1.37 1.37 3.27-3.27c.29-.29.77-.29 1.06 0 .3.3.3.77 0 1.07m-3.55-7.04a8.42 8.42 0 0 0 0 16.84c4.64 0 8.41-3.77 8.41-8.42s-3.77-8.42-8.41-8.42M20.991 19.79l-1.983-1.979a1 1 0 0 0-1.413 1.417l1.984 1.978a1 1 0 1 0 1.412-1.415"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchCheckBold;
