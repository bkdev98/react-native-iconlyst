import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordEditBold = ({
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
      d="M14.6 10.738a1.011 1.011 0 1 1 1.011 1.01 1.01 1.01 0 0 1-1.012-1.01m-2.896 1.01a1.011 1.011 0 1 1 .002-2.022 1.011 1.011 0 0 1-.002 2.022m-3.905 0a1.01 1.01 0 0 1-1.01-1.01 1.012 1.012 0 0 1 2.021 0c0 .557-.454 1.01-1.01 1.01m8.31 1.616c.014-.014.031-.023.045-.037l.744-.811a3.1 3.1 0 0 1 2.17-1.003 3.3 3.3 0 0 1 1.6.385c.226.122.536-.027.536-.283V8.788c0-3.308-2.123-5.53-5.283-5.53H7.486c-3.159 0-5.282 2.222-5.282 5.53v4.05c0 3.307 2.123 5.53 5.282 5.53h4.671a.316.316 0 0 0 .304-.25 3.86 3.86 0 0 1 .895-1.74l2.662-2.903c.032-.036.057-.076.091-.111"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.698 19.379a1.17 1.17 0 0 1-.685.379l-.818.13a.155.155 0 0 1-.181-.167l.09-.832a1.17 1.17 0 0 1 .29-.664l2.16-2.356 1.232 1.23zm2.478-5.117h.013c.058 0 .156.014.246.097l.75.694a.35.35 0 0 1 .11.242.37.37 0 0 1-.098.267l-.396.432-1.231-1.231.352-.384a.37.37 0 0 1 .254-.117m2.022-.315-.743-.687a1.863 1.863 0 0 0-2.635.1l-.794.867c-.01.009-.023.012-.032.02-.015.016-.02.035-.033.05l-2.676 2.919a2.66 2.66 0 0 0-.671 1.51l-.091.832a1.64 1.64 0 0 0 .51 1.383 1.64 1.64 0 0 0 1.406.427l.81-.13a2.66 2.66 0 0 0 1.562-.853l3.488-3.806a1.85 1.85 0 0 0 .495-1.347 1.83 1.83 0 0 0-.596-1.285"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPasswordEditBold;
