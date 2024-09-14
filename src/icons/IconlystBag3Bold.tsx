import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBag3Bold = ({
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
      d="M10.974 4.624h2.057c.496 0 .891.37.964.845h-3.986a.98.98 0 0 1 .965-.845m3.816 2.345h.42c.39 0 .75.05 1.08.14v13.89q-.495.12-1.08.12h-.42zm-7.08.14c.33-.09.69-.14 1.08-.14h.42v14.15h-.42q-.585 0-1.08-.12zm7.81-1.63h-.01a2.487 2.487 0 0 0-2.479-2.355h-2.057a2.49 2.49 0 0 0-2.481 2.355H8.48c-2.67.13-4.51 1.99-4.51 4.61V18c0 2.77 1.94 4.62 4.82 4.62h6.42c2.88 0 4.82-1.85 4.82-4.62v-7.91c0-2.62-1.84-4.48-4.51-4.61"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBag3Bold;
