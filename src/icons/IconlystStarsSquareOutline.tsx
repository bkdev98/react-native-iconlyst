import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarsSquareOutline = ({
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
      d="M4.355 3.897C5.34 2.841 6.742 2.25 8.397 2.25h8.435c1.66 0 3.062.59 4.046 1.648.978 1.05 1.486 2.502 1.486 4.13v7.946c0 1.627-.508 3.078-1.486 4.129-.985 1.056-2.387 1.647-4.047 1.647H8.397c-1.659 0-3.061-.59-4.046-1.647-.978-1.05-1.487-2.501-1.487-4.13V8.028c0-1.628.512-3.08 1.491-4.13M5.452 4.92c-.677.727-1.088 1.79-1.088 3.107v7.947c0 1.318.41 2.38 1.085 3.107.67.72 1.66 1.169 2.948 1.169h8.434c1.29 0 2.278-.45 2.949-1.17.676-.725 1.084-1.788 1.084-3.106V8.027c0-1.318-.408-2.381-1.084-3.107-.67-.72-1.66-1.17-2.948-1.17H8.397c-1.283 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.636 7.02c-.32-.99-1.72-.99-2.041 0l-.97 2.99-2.992.97-.002.001c-.984.322-.991 1.719.002 2.04l2.992.97.97 2.993c.32.988 1.72.988 2.04 0l.97-2.993 2.993-.97c.992-.321.984-1.718.003-2.04l-2.995-.97zm-1.02 1.716-.631 1.945v.002c-.107.325-.362.58-.688.687h-.002l-1.946.631 1.948.631c.326.107.58.362.687.688v.001l.631 1.946.631-1.946v-.001c.107-.326.362-.581.688-.688h.002l1.946-.63-1.946-.632h-.002a1.07 1.07 0 0 1-.687-.687v-.002z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarsSquareOutline;
