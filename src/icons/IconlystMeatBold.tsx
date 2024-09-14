import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMeatBold = ({
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
      d="M15.063 7.095a.29.29 0 0 0 0 .41l1.926 1.927a.29.29 0 0 0 .41 0l.76-.758c.399.312.902.505 1.45.505a2.39 2.39 0 0 0 2.39-2.391c0-1.136-.98-2.128-2.14-2.151-.03-1.163-1.02-2.137-2.157-2.137a2.385 2.385 0 0 0-2.38 2.38c0 .552.189 1.057.502 1.454z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.033 11.82a.975.975 0 0 0-.205-1.089l-3.06-3.06a.975.975 0 0 0-1.09-.205c-.154.07-.306.153-.459.236-.481.263-.973.53-1.583.43-2.25-.37-4.629 1.025-5.725 2.157-2.53 2.612-2.565 6.732 0 9.299 2.565 2.565 6.686 2.53 9.3 0 1.13-1.098 2.525-3.474 2.155-5.725-.1-.61.168-1.102.43-1.583.084-.153.167-.305.237-.46m-3.553 2.828a.75.75 0 0 0-1.5 0v.066a.75.75 0 0 0 1.5 0zm-3.147 1.837a.75.75 0 0 0-1.5 0v.066a.75.75 0 0 0 1.5 0zm2.559.901a.75.75 0 0 0-1.5 0v.066a.75.75 0 1 0 1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMeatBold;
