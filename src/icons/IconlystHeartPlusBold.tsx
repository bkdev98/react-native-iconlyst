import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartPlusBold = ({
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
      d="M14.181 12.34h-1.437v1.44a.75.75 0 0 1-1.5 0v-1.44H9.808a.75.75 0 0 1 0-1.5h1.436V9.41a.75.75 0 0 1 1.5 0v1.43h1.437a.75.75 0 0 1 0 1.5m6.804-5.363c-.68-1.68-1.993-2.907-3.695-3.452a6.1 6.1 0 0 0-2.91-.207c-.893.149-1.702.684-2.383 1.18-.656-.475-1.486-1.02-2.382-1.171a6.3 6.3 0 0 0-2.909.198c-3.73 1.207-4.879 5.289-3.836 8.534 1.624 5.21 8.62 8.525 8.916 8.664a.5.5 0 0 0 .423 0c.292-.136 7.184-3.391 8.906-8.66.551-1.715.504-3.522-.13-5.086"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartPlusBold;
