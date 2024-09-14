import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConeDashBulk = ({
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
      d="M20.17 15.898q.03.045.03.088c-.49-.785-1.35-1.41-2.308-1.862-1.546-.73-3.63-1.162-5.891-1.162s-4.346.431-5.893 1.162c-.958.452-1.817 1.076-2.308 1.86q0-.042.03-.086l6.38-12.37c.36-.69 1.04-1.13 1.79-1.13.74 0 1.43.44 1.79 1.13z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M4.87 17.431v.027c.008.314.163.672.558 1.057.41.398 1.037.78 1.86 1.099a.75.75 0 1 1-.54 1.4c-.946-.366-1.768-.843-2.366-1.424-.6-.585-1.013-1.317-1.013-2.16l.001-.042c.024-1.466 1.264-2.57 2.738-3.265 1.547-.73 3.631-1.161 5.893-1.161 2.26 0 4.345.431 5.891 1.161 1.488.703 2.737 1.821 2.737 3.308q0 .03-.002.06c-.02.817-.426 1.528-1.012 2.099-.598.582-1.42 1.059-2.367 1.423a.75.75 0 1 1-.54-1.4c.824-.317 1.451-.7 1.86-1.098.407-.396.56-.764.56-1.084v-.038c-.022-.562-.544-1.284-1.876-1.914-1.305-.615-3.161-1.017-5.251-1.017s-3.947.402-5.253 1.018c-1.363.643-1.878 1.384-1.878 1.951"
    />
    <Path
      fill={props.color}
      d="M9.927 20.264A15.5 15.5 0 0 0 12 20.4c.668 0 1.316-.041 1.931-.118a.75.75 0 1 1 .186 1.488c-.677.085-1.387.13-2.117.13-.787 0-1.55-.052-2.274-.15a.75.75 0 0 1 .2-1.486"
    />
  </Svg>
);
export default IconlystConeDashBulk;
