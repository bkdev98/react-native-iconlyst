import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseStarFavoriteBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.444 18.44 1.153-1.108a.472.472 0 0 0-.266-.808l-1.593-.23a.48.48 0 0 1-.362-.258l-.712-1.424a.483.483 0 0 0-.858 0l-.714 1.425a.48.48 0 0 1-.361.258l-1.594.23a.473.473 0 0 0-.266.807l1.154 1.108a.47.47 0 0 1 .138.419l-.273 1.564a.48.48 0 0 0 .697.499l1.424-.739a.49.49 0 0 1 .447 0l1.425.738a.48.48 0 0 0 .66-.225M3.225 5.92v5.84s0 2.919 7.376 2.919M17.977 10.297V5.918M3.225 15.656v1.942s0 2.92 7.376 2.92"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.6 3C6.528 3 3.226 4.315 3.226 5.938S6.527 8.876 10.6 8.876s7.376-1.315 7.376-2.938c0-1.04-1.355-1.952-3.399-2.475"
    />
  </Svg>
);
export default IconlystDatabaseStarFavoriteBroken;
