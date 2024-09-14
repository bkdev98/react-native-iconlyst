import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlickerRightOutline = ({
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
      d="M8.444 8.708a.416.416 0 0 0-.569.153L6.19 11.786a5.677 5.677 0 0 0 9.831 5.676l3.3-5.718a.88.88 0 0 0-.314-1.171.88.88 0 0 0-1.17.314.75.75 0 1 1-1.3-.75c.645-1.118 2.114-1.502 3.22-.863 1.118.645 1.502 2.114.864 3.22l-3.306 5.728a7.176 7.176 0 0 1-12.43-7.177l.004-.006 1.688-2.927a1.916 1.916 0 0 1 2.618-.703 2.79 2.79 0 0 1 1.021 3.812l-.035.061a.75.75 0 1 1-1.299-.75l.035-.06a1.29 1.29 0 0 0-.472-1.764"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.972 6.431a.86.86 0 0 0-1.171.314l-3.749 6.498a.75.75 0 1 1-1.3-.75l3.75-6.497.65.375-.65-.375a2.358 2.358 0 0 1 4.084 2.356.75.75 0 1 1-1.3-.75.857.857 0 0 0-.314-1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.154 6.699a.86.86 0 0 0-.855.421l-3.392 5.874a.75.75 0 1 1-1.299-.75L15 6.37a2.36 2.36 0 0 1 3.22-.864 2.36 2.36 0 0 1 .864 3.22L15.692 14.6a.75.75 0 1 1-1.299-.75l3.392-5.873a.856.856 0 0 0-.631-1.278M7.767 2.592a.75.75 0 0 1 1.038-.221l1.62 1.051a.75.75 0 0 1 .221 1.038L9.595 6.08a.75.75 0 0 1-1.259-.817l.643-.99-.99-.644a.75.75 0 0 1-.222-1.037"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.766 4.01a.75.75 0 0 1-.709.79c-1.779.095-4.02.881-5.103 2.57a.75.75 0 1 1-1.263-.811c1.452-2.263 4.268-3.15 6.287-3.257a.75.75 0 0 1 .788.709"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlickerRightOutline;
