import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPetDocClipboardLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.453 4.834a2.77 2.77 0 0 1 2.482-1.533h.13c1.05 0 2.011.593 2.481 1.533.076.151.23.246.398.246h.17a1.335 1.335 0 1 1 0 2.67H8.885a1.335 1.335 0 0 1 0-2.67h.17a.45.45 0 0 0 .398-.246"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.449 6.37c1.663.355 2.67 1.752 2.67 3.62v7.6c0 2.171-1.363 3.71-3.542 3.71H8.414c-2.18 0-3.533-1.539-3.533-3.71v-7.6c0-1.868 1.006-3.265 2.67-3.62"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.998 11.023v-.052m-.006-.153a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45M15.263 12.681v-.051m-.007-.153a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45M8.748 12.681v-.051m-.006-.153a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M12.03 17.668c1.368 0 3.102 1.185 3.077-.64-.01-1.367-1.434-2.651-3.077-2.652-1.652 0-3.293 1.395-3.065 2.817.252 1.65 1.853.475 3.065.475Z"
    />
  </Svg>
);
export default IconlystPetDocClipboardLight;
