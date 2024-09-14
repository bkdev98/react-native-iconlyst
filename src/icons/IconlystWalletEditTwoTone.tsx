import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletEditTwoTone = ({
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
      d="M21.5 14.39h-3.808a2.532 2.532 0 0 1 0-5.062h3.807"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.497 11.803h-.003M3.5 11.596V8.608a4.936 4.936 0 0 1 4.936-4.936h8.128A4.936 4.936 0 0 1 21.5 8.608v6.75a4.936 4.936 0 0 1-4.936 4.935h-4.367"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.058 20.177-.821.137a.92.92 0 0 1-1.067-1.006l.092-.846c.045-.41.216-.794.49-1.1l3.578-3.906a1.127 1.127 0 0 1 1.593-.063l.755.7c.457.422.484 1.135.061 1.593L7.2 19.547a1.97 1.97 0 0 1-1.142.63"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWalletEditTwoTone;
