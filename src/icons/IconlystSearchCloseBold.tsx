import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchCloseBold = ({
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
      d="M13.225 11.961c.3.29.3.76 0 1.06a.75.75 0 0 1-.53.22c-.19 0-.38-.08-.53-.22l-1.03-1.03-1.03 1.03c-.15.14-.34.22-.53.22s-.39-.08-.53-.22a.767.767 0 0 1 0-1.07l1.03-1.03-1.03-1.03c-.3-.29-.3-.77 0-1.06.29-.29.76-.29 1.06 0l1.03 1.03 1.03-1.03c.3-.29.77-.29 1.06 0 .3.29.3.77 0 1.06l-1.03 1.04zm-2.09-9.46a8.42 8.42 0 0 0 0 16.84c4.64 0 8.41-3.77 8.41-8.42s-3.77-8.42-8.41-8.42M20.99 19.79l-1.982-1.979a1 1 0 0 0-1.413 1.417l1.984 1.978a1 1 0 1 0 1.412-1.415"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchCloseBold;
