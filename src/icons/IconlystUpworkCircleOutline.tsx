import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpworkCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.585 8.557a.75.75 0 0 1 .838.457l.15.382c.174.443.373.95.608 1.46.448-.909 1.35-1.676 2.683-1.676 1.628 0 2.978 1.35 2.978 2.978 0 1.627-1.35 2.978-2.978 2.978-.763 0-1.408-.282-1.95-.699l-.076.405-.292 1.552-.127.676-.738-.138-.736-.14.127-.676.582-3.094a8 8 0 0 1-.189-.3 2.68 2.68 0 0 1-2.648 2.414 2.68 2.68 0 0 1-2.66-2.66V9.293a.75.75 0 1 1 1.5 0v3.183c0 .626.534 1.16 1.16 1.16s1.16-.534 1.16-1.16V9.293a.75.75 0 0 1 .608-.736m1.096 8.375-.736-.14a.75.75 0 1 0 1.474.278zm1.565-4.266c.511.632 1.048.97 1.618.97a1.5 1.5 0 0 0 1.478-1.478 1.5 1.5 0 0 0-1.478-1.478c-.842 0-1.364.604-1.49 1.294z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpworkCircleOutline;
