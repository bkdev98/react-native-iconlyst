import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnowmanOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.32 10.803a.75.75 0 0 0 .125 1.053l3.1 2.442a.75.75 0 0 0 .928-1.178l-3.1-2.442a.75.75 0 0 0-1.053.124M11.997 11.506a3.696 3.696 0 1 1 0-7.391 3.696 3.696 0 0 1 0 7.391M6.8 7.811a5.196 5.196 0 1 0 10.391 0 5.196 5.196 0 0 0-10.391 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.678 10.8a.75.75 0 0 1-.12 1.054l-2.643 2.098c.284.725.44 1.52.44 2.337a6.35 6.35 0 0 1-3.342 5.595c-2.095.982-4.145.971-6.05-.012-1.936-1-3.317-3.187-3.317-5.583a6.35 6.35 0 0 1 3.3-5.573.75.75 0 1 1 .722 1.315 4.85 4.85 0 0 0-2.522 4.258c0 1.842 1.074 3.511 2.505 4.25 1.454.75 3.005.786 4.703-.003a4.85 4.85 0 0 0 2.501-4.247c0-.796-.193-1.562-.53-2.222a.75.75 0 0 1 .202-.928l3.097-2.46a.75.75 0 0 1 1.054.121"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.639 11.464a.75.75 0 0 1 .75.75v2.3a.75.75 0 0 1-1.5 0v-2.3a.75.75 0 0 1 .75-.75M13.321 5.827a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75M12.492 14.682a.75.75 0 0 1 .75.75v.01a.75.75 0 1 1-1.5 0v-.01a.75.75 0 0 1 .75-.75M12.492 17.215a.75.75 0 0 1 .75.75v.01a.75.75 0 1 1-1.5 0v-.01a.75.75 0 0 1 .75-.75M10.677 5.827a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75M5.467 21.865a.75.75 0 0 1 .75-.75h11.566a.75.75 0 0 1 0 1.5H6.217a.75.75 0 0 1-.75-.75M12.654 8.044a.75.75 0 0 1-.287 1.02l-.83.465a.75.75 0 1 1-.732-1.309l.828-.464a.75.75 0 0 1 1.021.288"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSnowmanOutline;
