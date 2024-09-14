import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSendMessageOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.478 4.91c.896-1.643 3.25-1.643 4.147 0l7.383 13.56c.977 1.794-.624 3.914-2.62 3.439l-6.836-1.627-6.839 1.627c-1.996.475-3.595-1.645-2.619-3.438zm1.317.719a.86.86 0 0 1 1.513 0l7.383 13.559c.362.664-.235 1.433-.955 1.261l-7.01-1.668a.75.75 0 0 0-.348 0l-7.012 1.668c-.72.172-1.316-.596-.954-1.261z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.525 10.36a.75.75 0 0 1 .754.745l.044 8.362a.75.75 0 0 1-1.5.008l-.044-8.362a.75.75 0 0 1 .746-.754"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSendMessageOutline;
