import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarEngineLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.149 4.021v3.034m-2.022-3.034h4.044M3.25 10.21v6.067m2.831-3.034H3.25"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.241 9.866a1 1 0 0 1 1-1h.64a1 1 0 0 0 .668-.255L10 7.311a1 1 0 0 1 .668-.256h3.66a1 1 0 0 1 .884.534l1.742 3.3h1.421V9.866a1 1 0 0 1 1-1h1.034a1 1 0 0 1 1 1v8.102a1 1 0 0 1-1 1h-1.034a1 1 0 0 1-1-1v-1.023H16.17v2.034a1 1 0 0 1-1 1h-4.244a1 1 0 0 1-.817-.424l-1.545-2.187a1 1 0 0 0-.817-.423H7.24a1 1 0 0 1-1-1z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCarEngineLight;
