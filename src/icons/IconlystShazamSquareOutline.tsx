import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShazamSquareOutline = ({
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
      d="M16.215 21.75h-8.43c-3.31 0-5.53-2.32-5.53-5.77V8.03c0-3.4 2.28-5.78 5.53-5.78h8.43c3.31 0 5.53 2.32 5.53 5.78v7.95c0 3.45-2.22 5.77-5.53 5.77m-8.43-18c-2.45 0-4.03 1.68-4.03 4.28v7.95c0 2.59 1.58 4.27 4.03 4.27h8.43c2.45 0 4.03-1.68 4.03-4.27V8.03c0-2.6-1.58-4.28-4.03-4.28z"
    />
    <Path
      fill={props.color}
      d="M12.956 17.628c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.02-3.01c.78-.78.78-2.06 0-2.84s-2.05-.78-2.83 0l-1.84 1.85c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06l1.84-1.85a3.513 3.513 0 0 1 4.95 0 3.525 3.525 0 0 1 0 4.96l-3.02 3.01c-.15.15-.34.22-.53.22"
    />
    <Path
      fill={props.color}
      d="M9.976 15.589c-.94 0-1.82-.37-2.48-1.03a3.46 3.46 0 0 1-1.02-2.47c0-.94.36-1.81 1.03-2.48l3.02-3.02c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-3.02 3.02c-.38.38-.59.88-.59 1.42s.21 1.03.59 1.41.88.59 1.42.59c.53 0 1.04-.21 1.42-.59l1.84-1.84c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-1.84 1.84c-.66.66-1.54 1.03-2.48 1.03z"
    />
  </Svg>
);
export default IconlystShazamSquareOutline;
