import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCpuProcessor3Light = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.624 14.935c-.962 0-1.562-.68-1.562-1.638v-2.593c0-.962.604-1.642 1.562-1.642h2.752c.962 0 1.559.68 1.559 1.642v2.593c0 .959-.597 1.638-1.559 1.638z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.021 15.084c0 2.277 1.426 3.89 3.71 3.89h6.538c2.286 0 3.704-1.613 3.704-3.89V8.922c0-2.284-1.418-3.899-3.704-3.899H8.732c-2.278 0-3.71 1.615-3.71 3.9zM9.613 20.998v-2.021m4.774 2.02v-2.02M5.021 9.617H3m2.021 4.766H3M9.613 5.025V3.004m4.774 2.02v-2.02M21 9.617h-2.03M21 14.383h-2.03"
    />
  </Svg>
);
export default IconlystCpuProcessor3Light;
