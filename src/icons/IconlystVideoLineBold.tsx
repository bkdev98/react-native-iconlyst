import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoLineBold = ({
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
      fillRule="evenodd"
      d="M15.048 6.729a.3.3 0 0 0 .3-.299l.012-3.629a.3.3 0 0 0-.3-.301h-4.453a.3.3 0 0 0-.3.301l.012 3.629a.3.3 0 0 0 .3.299zM16.847 6.43a.3.3 0 0 0 .3.299h4.3a.287.287 0 0 0 .286-.345c-.498-2.24-2.305-3.754-4.599-3.876a.287.287 0 0 0-.3.292c.003.704.011 2.486.013 3.63M8.52 6.729a.3.3 0 0 0 .3-.3c0-1.542.007-2.942.009-3.63 0-.165-.134-.3-.3-.292-2.39.115-4.101 1.601-4.593 3.877a.288.288 0 0 0 .286.345zM12.516 17.03H8.624a.75.75 0 0 1 0-1.5h3.892a.75.75 0 0 1 0 1.5m-8.43-8.801a.3.3 0 0 0-.3.3v7.7c0 3.153 2.025 5.27 5.042 5.27h8.013c3.016 0 5.043-2.117 5.043-5.27v-7.7a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoLineBold;
