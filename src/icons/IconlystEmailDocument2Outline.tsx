import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailDocument2Outline = ({
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
      d="M12.254 15.305c-.505 0-1-.144-1.427-.416l-5.45-3.49a.75.75 0 0 1 .808-1.264l5.451 3.491a1.15 1.15 0 0 0 1.233 0l5.453-3.491a.75.75 0 0 1 .81 1.264l-5.453 3.49c-.425.272-.92.417-1.425.416"
    />
    <Path
      fill={props.color}
      d="M17.794 12.088a.75.75 0 0 1-.75-.75l-.01-5.918a1.623 1.623 0 0 0-1.616-1.61H9.08a1.62 1.62 0 0 0-1.617 1.618v5.91a.75.75 0 1 1-1.5 0v-5.91A3.12 3.12 0 0 1 9.08 2.31h6.337a3.13 3.13 0 0 1 3.117 3.1l.009 5.923a.75.75 0 0 1-.75.75z"
    />
    <Path
      fill={props.color}
      d="M13.38 10.399H11.13a.75.75 0 0 1 0-1.5h2.252a.75.75 0 0 1 0 1.5m1.236-3.175H9.894a.75.75 0 0 1 0-1.5h4.722a.75.75 0 1 1 0 1.5"
    />
    <Path
      fill={props.color}
      d="M7.711 21.688a4.94 4.94 0 0 1-3.566-1.449 5.84 5.84 0 0 1-1.642-4.194V10a5.39 5.39 0 0 1 4.05-5.52.75.75 0 1 1 .328 1.464A3.925 3.925 0 0 0 4.003 10v6.048a4.37 4.37 0 0 0 1.2 3.132 3.48 3.48 0 0 0 2.511 1.011h9.067a3.5 3.5 0 0 0 2.521-1.015 4.36 4.36 0 0 0 1.2-3.128V10a3.93 3.93 0 0 0-2.9-4.056.75.75 0 0 1 .327-1.464A5.4 5.4 0 0 1 22 10v6.048a5.84 5.84 0 0 1-1.644 4.19 4.95 4.95 0 0 1-3.576 1.453H7.706z"
    />
  </Svg>
);
export default IconlystEmailDocument2Outline;
