import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdLoveOutline = ({
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
      d="M17.377 20.863a.75.75 0 0 1-.38-.1l-.09-.053-.01-.006a13.8 13.8 0 0 1-2.384-1.838 5.24 5.24 0 0 1-1.267-1.987 3.13 3.13 0 0 1 1.826-4.07 3 3 0 0 1 2.256.162 3 3 0 0 1 2.252-.19 3.127 3.127 0 0 1 1.893 4.029 5.26 5.26 0 0 1-1.24 2.016 14 14 0 0 1-2.372 1.87l-.09.056a.75.75 0 0 1-.395.11m-1.372-6.706q-.238 0-.463.074a1.64 1.64 0 0 0-.881 2.164c.188.526.494 1.002.893 1.394a12 12 0 0 0 1.815 1.438c.647-.43 1.252-.921 1.805-1.465.394-.402.692-.886.873-1.418a1.634 1.634 0 0 0-.918-2.136 1.49 1.49 0 0 0-1.341.236.75.75 0 0 1-.9 0 1.5 1.5 0 0 0-.884-.287"
    />
    <Path
      fill={props.color}
      d="M7.253 19.608a4.55 4.55 0 0 1-3.416-1.383 5.02 5.02 0 0 1-1.287-3.5l-.043-6.579a4.605 4.605 0 0 1 4.677-4.943l10.06-.065A4.7 4.7 0 0 1 20.7 4.52a5.04 5.04 0 0 1 1.289 3.5l.019 2.92a.75.75 0 0 1-.745.754h-.005a.75.75 0 0 1-.75-.745l-.02-2.919a3.57 3.57 0 0 0-.88-2.48 3.12 3.12 0 0 0-2.351-.912l-10.062.065a3.106 3.106 0 0 0-3.187 3.433l.043 6.58c-.035.909.28 1.796.879 2.48a3.08 3.08 0 0 0 2.353.912l3.025-.019a.75.75 0 1 1 .005 1.5l-3.026.02z"
    />
    <Path
      fill={props.color}
      d="M3.264 10.02a.75.75 0 1 1 0-1.5l17.98-.118a.75.75 0 1 1 .006 1.5l-17.981.117z"
    />
  </Svg>
);
export default IconlystBankCarrdLoveOutline;
