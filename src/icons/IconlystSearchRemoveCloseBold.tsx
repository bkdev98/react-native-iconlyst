import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchRemoveCloseBold = ({
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
      d="M13.295 12.205c.29.3.29.77 0 1.07a.775.775 0 0 1-1.06 0l-.99-1-.99 1c-.29.29-.77.29-1.06 0-.3-.3-.3-.77 0-1.07l.99-.99-.99-.99c-.3-.29-.3-.76 0-1.06.29-.29.77-.29 1.06 0l.99.99.99-.99c.29-.29.77-.29 1.06 0 .29.3.29.77 0 1.06l-.99.99zm-2.04-9.58c-4.74 0-8.6 3.86-8.6 8.6 0 4.75 3.86 8.6 8.6 8.6s8.6-3.85 8.6-8.6c0-4.74-3.86-8.6-8.6-8.6M19.585 17.845c-.98 0-1.77.8-1.77 1.77a1.765 1.765 0 1 0 1.77-1.77"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchRemoveCloseBold;
