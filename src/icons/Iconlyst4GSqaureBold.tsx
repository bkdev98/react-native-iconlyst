import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst4GSqaureBold = ({
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
      d="M9.181 12.71v-1.07l-.77 1.07z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.8 13.47c0 1.228-.853 1.96-2.281 1.96a3.14 3.14 0 0 1-2.289-.959c-.652-.68-.988-1.618-.945-2.642a3.5 3.5 0 0 1 1.129-2.42c.638-.581 1.455-.886 2.278-.837.472.024.926.144 1.352.357a.75.75 0 0 1-.671 1.342 1.9 1.9 0 0 0-.757-.201c-.434-.025-.851.137-1.191.448a1.98 1.98 0 0 0-.641 1.373c-.026.603.167 1.165.529 1.541.312.326.729.498 1.206.498.781 0 .781-.244.781-.46v-.72h-.781a.75.75 0 0 1 0-1.5h1.531a.75.75 0 0 1 .75.75zm-6.832.74h-.287v.48a.75.75 0 0 1-1.5 0v-.48H6.949a.748.748 0 0 1-.608-1.187l2.981-4.15a.75.75 0 0 1 1.359.438v3.399h.287a.75.75 0 0 1 0 1.5M16.217 2.5H7.782C4.623 2.5 2.5 4.723 2.5 8.031v7.939c0 3.308 2.123 5.53 5.282 5.53h8.434c3.161 0 5.284-2.222 5.284-5.53V8.031c0-3.308-2.123-5.531-5.283-5.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst4GSqaureBold;
